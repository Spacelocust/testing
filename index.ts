const numberDices = 5;

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
