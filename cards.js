export function shuffleCards({ page }) {
  let chosenCards = [];

  for (let i = 0; i < page * 3; i++) {
    chosenCards.push(cards[Math.round(Math.random() * cards.length)]);
  }

  return chosenCards.concat(chosenCards).sort(() => Math.random() - 0.5);
}

export const cards = [
  {
    suit: 'spades',
    rank: 'ace',
    image: 'static/ace_spades.png',
  },
  {
    suit: 'spades',
    rank: 'king',
    image: 'static/king_spades.png',
  },
  {
    suit: 'spades',
    rank: 'queen',
    image: 'static/queen_spades.png',
  },
  {
    suit: 'spades',
    rank: 'jack',
    image: 'static/jack_spades.png',
  },
  {
    suit: 'spades',
    rank: '10',
    image: 'static/10_spades.png',
  },
  {
    suit: 'spades',
    rank: '9',
    image: 'static/9_spades.png',
  },
  {
    suit: 'spades',
    rank: '8',
    image: 'static/8_spades.png',
  },
  {
    suit: 'spades',
    rank: '7',
    image: 'static/7_spades.png',
  },
  {
    suit: 'spades',
    rank: '6',
    image: 'static/6_spades.png',
  },
  {
    suit: 'diamonds',
    rank: 'ace',
    image: 'static/ace_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: 'king',
    image: 'static/king_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: 'queen',
    image: 'static/queen_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: 'jack',
    image: 'static/jack_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: '10',
    image: 'static/10_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: '9',
    image: 'static/9_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: '8',
    image: 'static/8_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: '7',
    image: 'static/7_diamonds.png',
  },
  {
    suit: 'diamonds',
    rank: '6',
    image: 'static/6_diamonds.png',
  },
  {
    suit: 'hearts',
    rank: 'ace',
    image: 'static/ace_hearts.png',
  },
  {
    suit: 'hearts',
    rank: 'king',
    image: 'static/king_hearts.png',
  },
  {
    suit: 'hearts',
    rank: 'queen',
    image: 'static/queen_hearts.png',
  },
  {
    suit: 'hearts',
    rank: 'jack',
    image: 'static/jack_hearts.png',
  },
  {
    suit: 'hearts',
    rank: '10',
    image: 'static/10_hearts.png',
  },
  {
    suit: 'hearts',
    rank: '9',
    image: 'static/9_hearts.png',
  },
  {
    suit: 'hearts',
    rank: '8',
    image: 'static/8_hearts.png',
  },
  {
    suit: 'hearts',
    rank: '7',
    image: 'static/7_hearts.png',
  },
  {
    suit: 'hearts',
    rank: '6',
    image: 'static/6_hearts.png',
  },
  {
    suit: 'clubs',
    rank: 'ace',
    image: 'static/ace_clubs.png',
  },
  {
    suit: 'clubs',
    rank: 'king',
    image: 'static/king_clubs.png',
  },
  {
    suit: 'clubs',
    rank: 'queen',
    image: 'static/queen_clubs.png',
  },
  {
    suit: 'clubs',
    rank: 'jack',
    image: 'static/jack_clubs.png',
  },
  {
    suit: 'clubs',
    rank: '10',
    image: 'static/10_clubs.png',
  },
  {
    suit: 'clubs',
    rank: '9',
    image: 'static/9_clubs.png',
  },
  {
    suit: 'clubs',
    rank: '8',
    image: 'static/8_clubs.png',
  },
  {
    suit: 'clubs',
    rank: '7',
    image: 'static/7_clubs.png',
  },
  {
    suit: 'clubs',
    rank: '6',
    image: 'static/6_clubs.png',
  },
];
