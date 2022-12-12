// global data
let gameOver = false;
let playerCards = [];
let computerCards = [];
let computerScore = 0;
let playerScore = 0;
let deck = [];


//card variables
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven',
  'Six', 'Five', 'Four', 'Three', 'Two'];
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];




function StartGame() {
  let input;
  input = prompt("Welcome to Blackjack. Do you want to play? (Y)es or (N)o").toUpperCase();

  if (input == 'Y') {


  }
}

//StartGame();




function createDeck() {

  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

createDeck();
console.log(createDeck());

function shuffleDeck(deck) {
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}

shuffleDeck(deck);
console.log(deck);


function getNextCard() {
  return deck.shift();
}


console.log("Players cards: ");
console.log(playerCards = [getNextCard(), getNextCard()]);
console.log("Dealers cards: ");
console.log(computerCards = [getNextCard(), getNextCard()]);



function getCardNumericValue(card) {

  switch (card.value) {
    case "Ace":
      return 1;
    case "Two":
      return 2;
    case "Three":
      return 3;
    case "Four":
      return 4;
    case "Five":
      return 5;
    case "Six":
      return 6;
    case "Seven":
      return 7;
    case "Eight":
      return 8;
    case "Nine":
      return 9;
    default:
      return 10;
  }
}


function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }

    if (hasAce && score + 10 <= 21) {
      return score + 10;
    }
  }
  return score;
}

console.log(getScore(playerCards));
console.log(getScore(computerCards));



function updateScores() {
  computerScore = getScore(computerCards);
  playerScore = getScore(playerCards);
}



function getCardString(card) {
  return card.value + " of " + card.suit;
}

function showStatus() {

  let dealerCardString = '';
  for (let i = 0; i < computerCards.length; i++) {
    dealerCardString += getCardString(computerCards[i]) + ' and ';

  }
  let playerCardString = '';
  for (let j = 0; j < playerCards.length; j++) {
    playerCardString += getCardString(playerCards[j]) + ' and ';
  }
  console.log("Dealer: " + dealerCardString + " " + getScore(computerCards) + " points.");
  console.log("Player: " + playerCardString + " " + getScore(playerCards) + hitOrStand() + " points.");
}
showStatus();


function HitOrStand() {
  let userInput;

  do {
    userInput = prompt("Do you want to (H)it or (S)tand?").toUpperCase();

    if (userInput === "H") {

      playerCards.push(getNextCard());
      check();
      showStatus();


    } else if (userInput === "S") {
      computerCards.push(getNextCard());

      showStatus();
    }
  }

  while (userInput !== "S");


}

HitOrStand();



function check() {

  if (getScore(playerCards) == 21) {
    console.log("Player Wins!");
  }
  else if (getScore(playerCards) > 21)
    console.log("Player Busted");
  StartGame();
}