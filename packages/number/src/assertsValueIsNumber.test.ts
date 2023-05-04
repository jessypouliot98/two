import { Number2 } from "./Number2";

describe(Number2.assertsValueIsNumber.name, () => {
  it.each([-100, 50, NaN, Infinity])('does not throw when a value is of type number', (number) => {
    expect(() => Number2.assertsValueIsNumber(number)).not.toThrow();
  })

  it.each([true, '100', Symbol.toStringTag, function () {}, ])('throws when a value is not of type number', (definitelyNotANumber) => {
    expect(() => Number2.assertsValueIsNumber(definitelyNotANumber)).toThrow();
  })
})