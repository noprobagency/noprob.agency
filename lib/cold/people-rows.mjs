// Rows of a treg.people.search answer. Since Nov 2026 `output.people` is a short normalised
// row (name, title, company_domain, profile_url); the provider's own row in `raw.data` still
// has first and last name, LinkedIn, country and the company fields. Without it, the short
// row is split into the same names.
export function peopleRows(answer) {
  const raw = answer?.raw?.data
  if (Array.isArray(raw) && raw.length) return raw
  return (answer?.output?.people || []).map((p) => {
    if (p.first_name) return p
    const [first, ...rest] = (p.name || '').trim().split(/\s+/)
    return { first_name: first, last_name: rest.join(' '), title: p.title, employee_linkedin: p.profile_url, company_name: p.company }
  })
}
