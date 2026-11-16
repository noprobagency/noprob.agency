"""Regola dei grassetti negli articoli e nei casi studio.
1) Primo paragrafo dopo ogni h2/h3 (solo articoli): prima frase in grassetto (risposta citabile). Altri paragrafi: nessun grassetto.
2) Liste: etichetta corta in grassetto (max 6 parole, chiusa da : o .) solo se ce l'hanno tutte le voci; altrimenti niente.
3) Tabelle e testo corrente: niente grassetto.
Cambia solo i ** (controllo finale: testo senza ** identico)."""
import re, sys

LABEL = re.compile(r'^\*\*([^*]{1,80}?[:.])\*\*\s')
LABEL2 = re.compile(r'^\*\*([^*]{1,80}?)\*\*([:.])\s')


def strip(s):
    return s.replace('**', '')


def words(s):
    return len(s.split())


def lead(s):
    s = strip(s)
    depth = 0
    for i, c in enumerate(s):
        if c in '[(':
            depth += 1
        elif c in '])':
            depth = max(0, depth - 1)
        elif c in '.?!' and depth == 0 and i + 1 < len(s) and s[i + 1] == ' ' and not s[max(0, i - 1)].isdigit():
            first = s[: i + 1]
            if 25 <= len(first) <= 240:
                return '**' + first + '**' + s[i + 1 :]
            return s
    return s


def label_of(item):
    for rx in (LABEL, LABEL2):
        m = rx.match(item)
        if m and words(m.group(1)) <= 6:
            return m
    return None


def fix_items(items):
    if items and all(label_of(x) for x in items):
        out = []
        for x in items:
            m = label_of(x)
            lab = m.group(1) + (m.group(2) if m.re is LABEL2 else '')
            out.append('**' + lab + '** ' + strip(x[m.end():]))
        return out
    return [strip(x) for x in items]


def read_str(src, i):
    q = src[i]
    j = i + 1
    while src[j] != q:
        j += 2 if src[j] == '\\' else 1
    return src[i + 1 : j], j + 1


def process(src, leads):
    out = []
    pos = 0
    prev = None
    for m in re.finditer(r"\{\s*type:\s*'(\w+)'", src):
        t = m.group(1)
        if m.start() < pos:
            continue
        if t == 'paragraph':
            k = re.compile(r"text:\s*(['\"`])").search(src, m.end())
            s0 = k.end() - 1
            val, e = read_str(src, s0)
            new = lead(val) if (leads and prev in ('h2', 'h3')) else strip(val)
            out.append(src[pos : s0 + 1])
            out.append(new)
            pos = e - 1
        elif t == 'list':
            k = re.compile(r"items:\s*\[").search(src, m.end())
            j = k.end()
            lits = []
            while True:
                while src[j] in ' \n\t,':
                    j += 1
                if src[j] == ']':
                    break
                val, e = read_str(src, j)
                lits.append((j, e, val))
                j = e
            for (a, e, _), nv in zip(lits, fix_items([v for _, _, v in lits])):
                out.append(src[pos : a + 1])
                out.append(nv)
                pos = e - 1
        elif t == 'table':
            k = re.compile(r"rows:\s*\[").search(src, m.end())
            j = k.end()
            depth = 1
            while depth:
                c = src[j]
                if c in '\'"`':
                    val, e = read_str(src, j)
                    out.append(src[pos : j + 1])
                    out.append(strip(val))
                    pos = e - 1
                    j = e
                    continue
                depth += c == '['
                depth -= c == ']'
                j += 1
        if t != 'image':
            prev = t
    out.append(src[pos:])
    return ''.join(out)


if __name__ == '__main__':
    changed = 0
    for f in sys.argv[1:]:
        src = open(f).read()
        new = process(src, '/articles/' in f)
        assert strip(new) == strip(src), f
        if new != src:
            open(f, 'w').write(new)
            changed += 1
    print('file cambiati', changed)
