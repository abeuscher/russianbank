import { v4 as uuidv4 } from 'uuid';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const generateDeck = () => {
  const deck: { id: string; value: string; suit: string; facedown: boolean }[] = [];
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({
        id: `${value}-of-${suit}-${uuidv4()}`,
        value,
        suit,
        facedown: true,
      });
    });
  });

  // Shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};

export const initializeDecks = () => {
  const playerDeck = generateDeck();
  const opponentDeck = generateDeck();
  return { playerDeck, opponentDeck };
};