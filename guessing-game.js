function guessingGame() {
  let secretNum = Math.floor((Math.random() * 100));
  let guesses = 0;
  let gameOver = false;
  return function guess(num) {
    guesses++;
    if (gameOver) {
      return "The game is over, you already won!";
    } else if (num > secretNum) {
      return `${num} is too high!`;
    } else if (num < secretNum) {
      return `${num} is too low!`;
    } else {
      gameOver = true;
      return `You win! You found ${secretNum} in ${guesses} guesses.`
    }
  }
}

module.exports = { guessingGame };
