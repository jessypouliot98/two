import { Number2 } from "./Number2";

describe(Number2.isNumber.name, () => {
  it.each([-100, 50, NaN, Infinity])('returns true when a value is of type number', (number) => {
    expect(Number2.isNumber(number)).toBe(true);
  })

  it.each([true, '100', Symbol.toStringTag, function () {}, ])('returns false when a value is not of type number', (definitelyNotANumber) => {
    expect(Number2.isNumber(definitelyNotANumber)).toBe(false);
  })
})