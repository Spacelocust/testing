import { describe, expect, test } from "bun:test";

import { countDuplicates, getFigure, getPoints, randomNumber, throwDices } from "..";

describe("yams test", () => {
  test("random number between 1 and 6 include", () => {
    expect(randomNumber()).toBeLessThanOrEqual(6)
  })

  test("return an array of numbers with a length of 5", () => {
    expect(throwDices()).toBeArrayOfSize(5);
  });

  test("return 0 if array size is under 5", () => {
    expect(getPoints([1, 2, 3, 4])).toEqual(0);
  });

  test("return number points equal to 15", () => {
    expect(getPoints([1, 2, 3, 4, 5])).toEqual(15);
  });

  test("return an empty object if array size is under 5", () => {
    expect(countDuplicates([1, 1, 2, 2])).toMatchObject({});
  });

  test("return an object with duplicate numbers", () => {
    expect(countDuplicates([1, 1, 2, 2, 2])).toMatchObject({ 1: 2, 2: 3 });
  });

  test("return a score of 50 if all dices are the same", () => {
    expect(getFigure([1, 1, 1, 1, 1])).toEqual(50);
  });

});