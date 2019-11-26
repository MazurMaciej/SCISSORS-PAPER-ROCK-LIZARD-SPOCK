//objects
const results = {
  numberOfGames: 0,
  numberOfWins: 0,
  numberOfLosers: 0,
  numberOfDraws: 0,
}

const choice = {
  Ai: "",
  Player: "",
}

//variables
const chooseButton = document.querySelector('.user__choose-button');
let choiceAi = document.querySelector('.choice__ai--result');
let choicePlayer = document.querySelector('.choice__player--result');

//Player Choice
const playerChoice = (e) => {
  choice.Player = e.target.dataset.option;
  choicePlayer.textContent = choice.Player;
}

//AI choice
const gameChoiceAi = () => {
  const arrayOfTurns = ['paper', 'rock', 'scissors', 'spock', 'lizard'];
  choice.Ai = arrayOfTurns[Math.floor(Math.random() * arrayOfTurns.length)];
  choiceAi.textContent = choice.Ai;
}

//checkin who win
const whoWin = (Player, Ai) => {
  if (Player === Ai) {
    return "draws";
  } else if ((Player === "paper" && Ai === "rock") || (Player === "paper" && Ai === "spock") || (Player === "rock" && Ai === "lizard") || (Player === "rock" && Ai === "scissors") || (Player === "scissors" && Ai === "lizard") || (Player === "scissors" && Ai === "paper") || (Player === "spock" && Ai === "rock") || (Player === "spock" && Ai === "scissors") || (Player === "lizard" && Ai === "spock") || (Player === "lizard" && Ai === "paper")) {
    return "win";
  } else {
    return "loss";
  }
};

//updateStats
const upDateStats = (checkResult) => {
  document.querySelector('.results__number-of-games--display').textContent = `${++results.numberOfGames}`
  if (checkResult === 'win') { document.querySelector('.results__number-of-wins--display').textContent = `${++results.numberOfWins}` } else if (checkResult === "loss") { document.querySelector('.results__number-of-losers--display').textContent = `${++results.numberOfLosers}` } else if (checkResult === "draws") { document.querySelector('.results__number-of-draws--display').textContent = `${++results.numberOfDraws}` }
  document.querySelector('.choice__game-result--result').textContent = `Maciej ${checkResult}`
}

//CORE function
const playGame = () => {
  gameChoiceAi();
  const checkResult = whoWin(choice.Player, choice.Ai);
  upDateStats(checkResult)
}

//Add events listeners
chooseButton.addEventListener('click', playGame)
document.querySelectorAll('.user-choice').forEach(block => block.addEventListener('click', playerChoice))
