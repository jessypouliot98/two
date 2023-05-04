import { interpolate } from "./interpolate";

describe(interpolate.name, () => {
  it.each([
    { start: 0, end: 10, t: 0.5, expected: 5 },
    { start: -50, end: 50, t: 0.5, expected: 0 },
    { start: 1, end: 3, t: 1/3, expected: 1 + 2/3 },
    { start: -50, end: 90000, t: 1/3, expected: 29966.666666666664 },
    { start: 100, end: 200, t: 2, expected: 300 },
  ])('returns expected result', ({ start, end, t, expected }) => {
    expect(interpolate(start, end, t)).toBe(expected);
  });
})