import { round } from "./round";

describe(round.name, () => {
  it.each([
    { input: 1/3, decimalPoints: 4, output: 0.3333 },
    { input: 2/3, decimalPoints: 2, output: 0.67 },
    { input: -4.2069, decimalPoints: 10, output: -4.2069 },
    { input: -400.123456, decimalPoints: 5, output: -400.12346 },
  ])('returns expected rounded number', ({ input, decimalPoints, output }) => {
    expect(round(input, decimalPoints)).toBe(output);
  })
})