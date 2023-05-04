import { randomInt } from "./randomInt";

describe(randomInt.name, () => {
  it.each([
    1,
    1000,
    69
  ])('returns an integer between 0 & max (max excluded) when using only the `max` param', (max) => {
    const value = randomInt(max);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(max);
    expect(Number.isInteger(value)).toBe(true);
  });

  it.each([
    [-100, -69],
    [500, 1000],
  ])('returns an integer between 0 & max (max excluded) when using only the `max` param', (min, max) => {
    const value = randomInt(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThan(max);
    expect(Number.isInteger(value)).toBe(true);
  });

  it('returns a float with the same decimals as `min` (floating point may be imprecise)', () => {
    const min = 1.69;
    const max = 10;
    const value = randomInt(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThan(max);
    expect(value % 1).toBeCloseTo(.69, 10);
    expect(Number.isInteger(value)).toBe(false);
  })
})