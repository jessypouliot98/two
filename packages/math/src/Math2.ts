import { randomInt as math2RandomInt } from "./randomInt";
import { randomFloat as math2RandomFloat } from "./randomFloat";
import { interpolate as math2Interpolate } from "./interpolate";
import { round as math2Round } from "./round";
import { clamp as math2Clamp } from "./clamp";
import { chance as math2Chance } from "./chance";

export namespace Math2 {
  export const randomInt = math2RandomInt;
  export const randomFloat = math2RandomFloat;
  export const interpolate = math2Interpolate;
  export const round = math2Round;
  export const clamp = math2Clamp;
  export const chance = math2Chance;
}