let deck;
const VALUES = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven',
    'Six', 'Five', 'Four', 'Three', 'Two'];
const SUITS = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

function StartGame() {
  let input;
  input = prompt("Welcome to Blackjack. Do you want to play? (Y)es or (N)o").toUpperCase();

  if (input == 'Y') {
    console.log("Game starting...")
  }
}

//StartGame();

function createDeck() {
VALUES.forEach((value) => {
  SUITS.forEach((suit) =>{
   deck = value + " - " + suit;
    console.log(deck);
 })
  })
  return deck;
}

createDeck();



function shuffleDeck() {
 
  for (let i = 0; deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
      }
  console.log(deck);
}
shuffleDeck();