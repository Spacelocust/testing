import { describe, expect, test } from "bun:test"
import { randomNumber } from "..";

const figures = {
  "brelan": {
    points: 28,
    need: 3,
  },
  "carré": {
    points: 50,
    need: 4,
  },
  "full": {
    points: 40,
    need: 5,
  },
  "petite suite": {
    points: 30,
    need: 4,
  },
  "grande suite": {
    points: 40,
    need: 5,
  },
  "yams": {
    points: 50,
    need: 5,
  },
  "chance": {
    points: 0,
    need: 0,
  },
}
describe("yams test", () => {
  test("random number between 1 and 6 include", () => {
    expect(randomNumber()).toBeLessThanOrEqual(6)
  })
});