import { clamp } from "./clamp";

describe(clamp.name, () => {
  it.each([
    [[0, 10, 100], 10],
    [[0, -100, 100], 0],
    [[0, 200, 100], 100],
  ])('returns expected number', ([min, current, max], expected) => {
    expect(clamp(min, current, max)).toEqual(expected)
  })
})