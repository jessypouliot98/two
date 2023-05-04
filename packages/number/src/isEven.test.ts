import { Number2 } from "./Number2";

describe(Number2.isEven.name, () => {
  it.each([-1, 11])('returns true when number is not even', (number) => {
    expect(Number2.isEven(number)).toBe(false);
  })

  it.each([-2, 0, 10])('returns true when number is even', (number) => {
    expect(Number2.isEven(number)).toBe(true);
  })
})