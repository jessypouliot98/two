import { Merge } from "./types";

export namespace Object2 {

  export type FromMapOptions = { strict?: boolean };
  export function fromMap<TKey extends string, TData extends unknown, TOpts extends FromMapOptions>(map: Map<TKey, TData>, opts?: TOpts): TOpts['strict'] extends true ? Record<TKey, TData> : Record<string, TData> {
    return Object.fromEntries(Array.from(map.entries())) as Record<TKey, TData>;
  }

  export function assign<TSource extends object, TExtra extends object>(source: TSource, extra: TExtra): Merge<TSource, TExtra> {
    return Object.assign(source, extra);
  }

}