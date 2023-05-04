import { Number2 } from "./Number2";

describe(Number2.assertsValueIsNumberStrict.name, () => {
  it.each([-100, 50])('does not throw when a value is of type number', (number) => {
    expect(() => Number2.assertsValueIsNumberStrict(number)).not.toThrow();
  })

  it.each([NaN, Infinity, true, '100', Symbol.toStringTag, function () {}, ])('throws when a value is not of type number', (definitelyNotANumber) => {
    expect(() => Number2.assertsValueIsNumberStrict(definitelyNotANumber)).toThrow();
  })
})