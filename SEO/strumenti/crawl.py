import json, re, sys, urllib.request, urllib.parse
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor

BASE = "https://noprob.agency"
UA = "Mozilla/5.0 (compatible; FrancescaSEO/1.0)"


def fetch(url, method="GET"):
    req = urllib.request.Request(url, headers={"User-Agent": UA}, method=method)
    class NoRedir(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None
    opener = urllib.request.build_opener(NoRedir)
    try:
        r = opener.open(req, timeout=30)
        return r.status, dict(r.headers), r.read() if method == "GET" else b""
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers), e.read() if method == "GET" else b""


class P(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""; self.in_title = False
        self.meta = {}; self.links = []; self.canon = None; self.alts = {}
        self.heads = []; self.cur_h = None; self.cur_txt = ""
        self.imgs = []; self.ld = []; self.in_ld = False; self.ld_buf = ""
        self.text = []; self.skip = 0; self.lang = None
    def handle_starttag(self, t, a):
        a = dict(a)
        if t == "html": self.lang = a.get("lang")
        if t == "title": self.in_title = True
        if t == "meta":
            k = a.get("name") or a.get("property")
            if k: self.meta[k.lower()] = a.get("content", "")
        if t == "link":
            rel = (a.get("rel") or "").lower()
            if rel == "canonical": self.canon = a.get("href")
            if rel == "alternate" and a.get("hreflang"): self.alts[a["hreflang"]] = a.get("href")
        if t == "a" and a.get("href"): self.links.append(a["href"])
        if t in ("h1", "h2", "h3"): self.cur_h = t; self.cur_txt = ""
        if t == "img": self.imgs.append({"src": a.get("src"), "alt": a.get("alt")})
        if t == "script" and a.get("type") == "application/ld+json": self.in_ld = True; self.ld_buf = ""
        elif t in ("script", "style", "noscript"): self.skip += 1
    def handle_endtag(self, t):
        if t == "title": self.in_title = False
        if t == self.cur_h: self.heads.append((t, self.cur_txt.strip())); self.cur_h = None
        if t == "script" and self.in_ld:
            self.in_ld = False; self.ld.append(self.ld_buf)
        elif t in ("script", "style", "noscript") and self.skip: self.skip -= 1
    def handle_data(self, d):
        if self.in_title: self.title += d
        if self.in_ld: self.ld_buf += d; return
        if self.skip: return
        if self.cur_h: self.cur_txt += d
        self.text.append(d)


def ld_types(blobs):
    out = []
    def walk(o):
        if isinstance(o, dict):
            t = o.get("@type")
            if t: out.extend(t if isinstance(t, list) else [t])
            for v in o.values(): walk(v)
        elif isinstance(o, list):
            for v in o: walk(v)
    for b in blobs:
        try: walk(json.loads(b))
        except Exception: out.append("INVALID_JSON")
    return sorted(set(out))


def norm(href, page):
    u = urllib.parse.urljoin(page, href).split("#")[0]
    if not u.startswith(BASE): return None
    u = u.rstrip("/") or BASE
    return u


def audit(url):
    st, hd, body = fetch(url)
    html = body.decode("utf-8", "replace")
    p = P(); p.feed(html)
    words = len(re.findall(r"\w+", " ".join(p.text)))
    internal = sorted({n for h in p.links if (n := norm(h, url))})
    h1 = [h for t, h in p.heads if t == "h1"]
    return {
        "url": url, "status": st, "x_robots": hd.get("X-Robots-Tag") or hd.get("x-robots-tag"),
        "lang": p.lang, "title": p.title.strip(), "title_len": len(p.title.strip()),
        "description": p.meta.get("description", ""), "description_len": len(p.meta.get("description", "")),
        "robots": p.meta.get("robots"), "canonical": p.canon, "hreflang": p.alts,
        "h1": h1, "h2": [h for t, h in p.heads if t == "h2"], "h3_count": sum(1 for t, _ in p.heads if t == "h3"),
        "words": words, "internal_out": internal, "jsonld": ld_types(p.ld),
        "imgs": len(p.imgs), "imgs_no_alt": [i["src"] for i in p.imgs if i["alt"] is None],
        "og_image": p.meta.get("og:image"), "bytes": len(body),
    }


if __name__ == "__main__":
    sm = fetch(BASE + "/sitemap.xml")[2].decode()
    urls = re.findall(r"<loc>(.*?)</loc>", sm)
    with ThreadPoolExecutor(8) as ex:
        res = list(ex.map(audit, urls))
    inbound = {u: 0 for u in urls}
    for r in res:
        for l in r["internal_out"]:
            if l in inbound and l != r["url"]: inbound[l] += 1
    for r in res: r["internal_in"] = inbound[r["url"]]
    linked = set(l for r in res for l in r["internal_out"])
    json.dump({"date": sys.argv[1], "sitemap_count": len(urls), "pages": res,
               "linked_not_in_sitemap": sorted(linked - set(urls))}, open(sys.argv[2], "w"), indent=1, ensure_ascii=False)
    print(len(urls), "urls")
