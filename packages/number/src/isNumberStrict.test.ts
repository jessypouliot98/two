import { Number2 } from "./Number2";

describe(Number2.isNumberStrict.name, () => {
  it.each([-100, 50])('returns true when a value is of type number', (number) => {
    expect(Number2.isNumberStrict(number)).toBe(true);
  })

  it.each([NaN, Infinity, true, '100', Symbol.toStringTag, function () {}, ])('returns false when a value is not of type number', (definitelyNotANumber) => {
    expect(Number2.isNumberStrict(definitelyNotANumber)).toBe(false);
  })
})