import { Map2 } from "./Map2";

describe(Map2.fromObject.name, () => {
  it('returns expected map from object', () => {
    const obj = {
      foo: 'bar',
      bar: [1,2,3],
      baz: () => true
    };
    expect(Map2.fromObject(obj)).toEqual(new Map([
      ['foo', obj.foo],
      ['bar', obj.bar],
      ['baz', obj.baz],
    ]))
  })
})