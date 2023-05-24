import { chance } from "./chance";

describe(chance.name, () => {
  it("returns a boolean", () => {
    expect(typeof chance(1/2)).toBe("boolean")
  })
})