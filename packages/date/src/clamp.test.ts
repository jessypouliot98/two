import { clamp } from "./clamp";

describe(clamp.name, () => {
  it.each([
    [[0, 10, 100], new Date(10)],
    [[0, -100, 100], new Date(0)],
    [[0, 200, 100], new Date(100)],
    [[new Date('1970-01-01'), 1000, new Date('2000-01-01')], new Date(1000)],
    [[new Date('1970-01-01'), new Date('1950-01-01'), new Date('2000-01-01')], new Date('1970-01-01')],
  ])('returns expected Date', ([min, current, max], expected) => {
    expect(clamp(min, current, max)).toEqual(expected)
  })
})