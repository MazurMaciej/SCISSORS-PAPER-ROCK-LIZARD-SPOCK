//objects
const results = {
  numberOfGames: 0,
  numberOfWins: 0,
  numberOfLosers: 0,
  numberOfDraws: 0,
}

const choice = {
  choiceAi: "",
  choicePlayer: "",
}

//variables
const chooseButton = document.querySelector('.user__choose-button');
let choicePlayer = document.querySelector('.choice__player--result');
let choiceAi = document.querySelector('.choice__ai--result');
let choiceGameResult = document.querySelector('.choice__game-result--result');

const playGame = (e) => {
  gameChoiceAi()
  choice.choicePlayer = e.toElement.alt
  console.log(`PL: ${choice.choicePlayer}, AI: ${choice.choiceAi}`)
  choicePlayer.textContent = `${choice.choicePlayer}`
  choiceAi.textContent = `${choice.choiceAi}`


}

//AI choice
const gameChoiceAi = () => {
  const choices = ['paper', 'rock', 'scissors', 'spock', 'lizard'];
  const choiceAi = choices[Math.floor(Math.random() * choices.length)];
  choice.choiceAi = choiceAi;
}

//who win
const whoWinGame = () => {

  switch (choice.choicePlayer) {
    case 'paper':
      if (choice.choiceAi === 'spock' || choice.choiceAi === 'rock') { console.log('MACIEJ WYGRAL') }
      else if (choice.choiceAi === 'paper') { console.log('REMIS') }
      else if (choice.choiceAi === 'lizard' || choice.choiceAi === 'scissors') { console.log('AI WYGRAŁO') }
      break;

    case 'rock':
      if (choice.choiceAi === 'lizard' || choice.choiceAi === 'scissors') { console.log('MACIEJ WYGRAL') }
      else if (choice.choiceAi === 'rock') { console.log('REMIS') }
      else if (choice.choiceAi === 'spock' || choice.choiceAi === 'paper') { console.log('AI WYGRAŁO') }
      break;

    case 'scissors':
      if (choice.choiceAi === 'lizard' || choice.choiceAi === 'paper') { console.log('MACIEJ WYGRAL') }
      else if (choice.choiceAi === 'scissors') { console.log('REMIS') }
      else if (choice.choiceAi === 'spock' || choice.choiceAi === 'rock') { console.log('AI WYGRAŁO') }
      break;

    case 'spock':
      if (choice.choiceAi === 'rock' || choice.choiceAi === 'scissors') { console.log('MACIEJ WYGRAL') }
      else if (choice.choiceAi === 'spock') { console.log('REMIS') }
      else if (choice.choiceAi === 'lizard' || choice.choiceAi === 'paper') { console.log('AI WYGRAŁO') }
      break;

    case 'lizard':
      if (choice.choiceAi === 'spock' || choice.choiceAi === 'paper') { console.log('MACIEJ WYGRAL') }
      else if (choice.choiceAi === 'lizard') { console.log('REMIS') }
      else if (choice.choiceAi === 'scissors' || choice.choiceAi === 'rock') { console.log('AI WYGRAŁO') }
      break;
  }

};

//Data in results
const numberOfGames = document.querySelector('.results__number-of-games--display').textContent = `${results.numberOfGames}`
const numberOfWins = document.querySelector('.results__number-of-wins--display').textContent = `${results.numberOfWins}`
const numberOfLosers = document.querySelector('.results__number-of-losers--display').textContent = `${results.numberOfLosers}`
const numberOfDraws = document.querySelector('.results__number-of-draws--display').textContent = `${results.numberOfDraws}`


//Add events listeners
chooseButton.addEventListener('click', whoWinGame)

document.querySelectorAll('.user-choice').forEach(block => block.addEventListener('click', playGame))

