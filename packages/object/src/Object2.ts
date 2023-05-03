export namespace Object2 {

  export function fromMapStrict<TKey extends string, TData extends unknown>(map: Map<TKey, TData>) {
    return Object.fromEntries(Array.from(map.entries())) as Record<TKey, TData>;
  }

  export function fromMap<TKey extends string, TData extends unknown>(map: Map<TKey, TData>): Record<string, TData> {
    return Object2.fromMapStrict(map);
  }

  /**
   * @return void -- Unlike `Object.assign` `Object2.assign` can't return a value because it uses `asserts` to "mutate" the type of the `source`. Use `Object.assign` if the return value is required
   */
  export function assign<TSource extends object, TExtra extends object>(source: TSource, extra: TExtra): asserts source is TSource & TExtra {
    Object.assign(source, extra);
  }

}