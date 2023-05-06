import { Array2 } from "./Array2";

describe(Array2.filterNil.name, () => {
  it('returns a filtered array as expected', () => {
    const array = [{ foo: 'bar' }, null, undefined, 123];
    const result = Array2.filterNil(array);
    expect(result).toEqual([{ foo: 'bar' }, 123]);
    expect(result).not.toBe(array); // is immutable
  })
})

describe(Array2.range.name, () => {
  it.each([
    { min: 0, max: 10, expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { min: -5, max: 0, expected: [-5, -4, -3, -2, -1, 0 ] },
  ])('returns an array with expected range of number', ({ min, max, expected }) => {
    expect(Array2.range(min, max)).toEqual(expected)
  })

  it('returns an array with expected range from 0 to max', () => {
    expect(Array2.range(5)).toEqual([0, 1, 2, 3, 4, 5])
  })
})

describe(Array2.pickRandom.name, () => {
  it('returns a value from the array', () => {
    const array = [undefined, null, 1, "a", true, { foo: 'bar' }];
    const result = Array2.pickRandom(array);
    expect(array.indexOf(result)).toBeGreaterThanOrEqual(0)
  })

  it('returns undefined when an array is empty', () => {
    expect(Array2.pickRandom([])).toBe(undefined);
  })
})