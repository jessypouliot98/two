export namespace Map2 {

  export function fromObjectStrict<TKey extends string, TData extends unknown>(obj: Record<TKey, TData>) {
    return new Map(Object.entries(obj) as Array<[TKey, TData]>);
  }

  export function fromObject<TKey extends string, TData extends unknown>(obj: Record<TKey, TData>): Map<string, TData> {
    return Map2.fromObjectStrict(obj);
  }

}