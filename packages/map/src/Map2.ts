export namespace Map2 {

  export type FromObjectOptions = { strict?: boolean };
  export function fromObject<TKey extends string, TData extends unknown, TOpts extends FromObjectOptions>(obj: Record<TKey, TData>, opts?: FromObjectOptions): FromObjectOptions["strict"] extends true ? Map<TKey, TData> : Map<string, TData> {
    return new Map(Object.entries(obj) as Array<[TKey, TData]>);
  }

}