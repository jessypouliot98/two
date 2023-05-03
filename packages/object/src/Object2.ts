export namespace Object2 {

  export function fromMapStrict<TKey extends string, TData extends unknown>(map: Map<TKey, TData>) {
    return Object.fromEntries(Array.from(map.entries())) as Record<TKey, TData>;
  }

  export function fromMap<TKey extends string, TData extends unknown>(map: Map<TKey, TData>): Record<string, TData> {
    return Object2.fromMapStrict(map);
  }

}