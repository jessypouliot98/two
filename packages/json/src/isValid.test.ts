import { JSON2 } from "./JSON2";

describe(JSON2.isValid.name, () => {
  it.each([
    ['true'],
    ['null'],
    ['"foo"'],
    ['123'],
    ['[1,2,3]'],
    ['{ "foo": true }'],
  ])('returns true when JSON is valid', (json) => {
    expect(JSON2.isValid(json)).toBe(true);
  })

  it.each([
    ["foo"],
    ["'foo'"],
    ["undefined"],
    ["[undefined]"],
  ])('returns false when JSON is invalid', (json) => {
    expect(JSON2.isValid(json)).toBe(false);
  })
})