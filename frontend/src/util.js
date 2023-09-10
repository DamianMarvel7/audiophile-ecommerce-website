export function getRandomNumber(excludedNumber) {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  } while (randomNum === excludedNumber);
  return randomNum;
}
