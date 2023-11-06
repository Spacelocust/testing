import { type } from "os";

const numberDices = 5;

type Figure = {
  points: number;
};

type Figures = {
  [key: string]: Figure;
}

const figures: Figures = {
  "brelan": {
    points: 28,
  },
  "carré": {
    points: 35,
  },
  "full": {
    points: 30,
  },
  "grande suite": {
    points: 40,
  },
  "yams": {
    points: 50,
  },
}

export function randomNumber(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function throwDices(): number[] {
  return Array.from({ length: numberDices }, randomNumber);
}

export function getPoints(dices: number[]): number {
  if (dices.length !== numberDices) {
    return 0;
  }

  return dices.reduce((acc, dice) => acc + dice, 0);
}

export function countDuplicates(arr: number[]): Record<number, number> {

  if (arr.length !== numberDices) {
    return {};
  }

  const counts: Record<number, number> = {};

  arr.forEach((num) => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });

  return counts;
}

