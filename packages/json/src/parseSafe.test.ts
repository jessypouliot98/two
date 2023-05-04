import { JSON2 } from "./JSON2";

describe(JSON2.parseSafe.name, () => {
  const expectedJSONError = expect.any(Error);

  it.each([
    ['true', { success: true, data: true }],
    ['null', { success: true, data: null }],
    ['"foo"', { success: true, data: 'foo' }],
    ['123', { success: true, data: 123 }],
    ['[1,2,3]', { success: true, data: [1,2,3] }],
    ['{ "foo": true }',{ success: true, data: { foo: true } } ],
    ["foo", { success: false, error: expectedJSONError }],
    ["'foo'", { success: false, error: expectedJSONError }],
    ["undefined", { success: false, error: expectedJSONError }],
    ["[undefined]", { success: false, error: expectedJSONError }],
  ])('returns expected result', (json, expected) => {
    expect(JSON2.parseSafe(json)).toEqual(expected);
  })
})