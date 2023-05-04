import { randomFloat } from "./randomFloat";

describe(randomFloat.name, () => {
  it.each([
    1,
    1000,
    69
  ])('returns a float between 0 & max (max excluded) when using only the `max` param', (max) => {
    const value = randomFloat(max);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(max);
    expect(Number.isInteger(value)).toBe(false);
  });

  it.each([
    [-100, -69],
    [500, 1000],
    [6.9, 42.6]
  ])('returns a float between 0 & max (max excluded) when using only the `max` param', (min, max) => {
    const value = randomFloat(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThan(max);
    expect(Number.isInteger(value)).toBe(false);
  });
})