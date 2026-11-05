import { describe, expect, it } from 'vitest'
import { peopleRows } from './people-rows.mjs'

describe('peopleRows', () => {
  it('prefers the provider row, which has the names and the company fields', () => {
    const row = { first_name: 'Ada', last_name: 'Rossi', employee_linkedin: 'https://l/ada', industry: 'Retail' }
    expect(peopleRows({ raw: { data: [row] }, output: { people: [{ name: 'Ada Rossi' }] } })).toEqual([row])
  })

  it('splits the short row when the provider row is missing', () => {
    const answer = { output: { people: [{ name: 'Ada De Rossi', title: 'CEO', company: 'Acme', profile_url: 'https://l/ada' }] } }
    expect(peopleRows(answer)).toEqual([
      { first_name: 'Ada', last_name: 'De Rossi', title: 'CEO', employee_linkedin: 'https://l/ada', company_name: 'Acme' },
    ])
  })

  it('returns nothing on an empty answer', () => {
    expect(peopleRows({ raw: { data: [] }, output: { people: [] } })).toEqual([])
    expect(peopleRows(undefined)).toEqual([])
  })
})
