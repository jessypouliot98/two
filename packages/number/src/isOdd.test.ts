import { Number2 } from "./Number2";

describe(Number2.isOdd.name, () => {
  it.each([-1, 11])('returns true when number is odd', (number) => {
    expect(Number2.isOdd(number)).toBe(true);
  })

  it.each([-2, 0, 10])('returns false when number is not odd', (number) => {
    expect(Number2.isOdd(number)).toBe(false);
  })
})