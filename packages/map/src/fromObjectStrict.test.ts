import { Map2 } from "./Map2";

describe(Map2.fromObjectStrict.name, () => {
  it('returns expected map from object', () => {
    const obj = {
      foo: 'bar',
      bar: [1,2,3],
      baz: () => true
    };
    expect(Map2.fromObjectStrict(obj)).toEqual(new Map([
      ['foo', obj.foo],
      ['bar', obj.bar],
      ['baz', obj.baz],
    ]))
  })
})