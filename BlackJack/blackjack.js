const VALUES = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven',
                'Six', 'Five', 'Four', 'Three', 'Two'];
const SUITS = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const deck = [];
let player = '';
let computer = '';
let computerScore = 0;
let playerScore = 0;



function StartGame() {
  let input;
  input = prompt("Welcome to Blackjack. Do you want to play? (Y)es or (N)o").toUpperCase();

  if (input == 'Y') {
    console.log("Game starting...")
  }
}

//StartGame();

function createDeck() {
  VALUES.forEach((value) =>{
    SUITS.forEach((suit) =>{
      const card = value + "-" +  suit;   
      deck.push(card);
    })
  })
  return deck;
}

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


function drawCards() {
  
   for (let i = 0; i < 4; i++){
  if(i <= 1){
    player += deck[i] + ' ';
     }else
    computer += deck[i] + ' ';
}
  console.log("Player: " + player);
   console.log("Computer: " + computer);
}
drawCards();

function getPlayerHand(player){
  player.proto.
}




function getScore(cards){
  let score = 0;
  for(let card of cards){

    if(card === "King"){
      score +=10;
    }else if(card === "Queen"){
      score += 10;
    }else if(card === "Jack"){
      score += 10;
    }else if(card === "Ace"){
      score += 1;
    }else {
      score += parseInt(cards);
    }
  }
  return score;
}





function getCardNumberValue(){
  let score = 0;
  switch(VALUES){
    case 'Ace':
      return score = 1;
      break;
    case 'Two':
      return  score = 2;
      break;
    case 'Three':
      return score = 3;
      break;
    case 'Four':
      return score = 4;
      break;
    case 'Five':
      return score = 5;
      break;
    case 'Six':
      return score = 6;
      break;
    case 'Seven':
      return score = 7;
      break;
    case 'Eight':
      return score = 8;
      break;
    case 'Nine':
      return score = 9;
      break;
    case 'Ten':
      return score = 10;
      break;
    case 'Jack':
      return score = 10;
      break;
    case 'Queen':
       return score = 10;
      break;
    case 'King':
      return  score = 10;
  }
 
}
