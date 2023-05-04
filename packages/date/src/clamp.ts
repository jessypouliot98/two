import { DateLike } from "./types";

const getTime = (dateLike: DateLike) => dateLike instanceof Date ? dateLike.getTime() : dateLike;

export function clamp(dateMin: DateLike, date: DateLike, dateMax: DateLike): Date {
  return new Date(Math.max(getTime(dateMin), Math.min(getTime(date), getTime(dateMax))));
}