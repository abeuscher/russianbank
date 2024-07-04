export interface CardSlotProps {
  id: string;
  value: string;
  suit: string;
  faceDown: boolean;
}

export class CardSlotData {
  private cards: CardSlotProps[];

  constructor() {
    this.cards = [];
  }

  addCard(card: CardSlotProps) {
    this.cards.push(card);
  }

  removeCard() {
    return this.cards.pop();
  }

  getCards() {
    return this.cards;
  }

  isFaceDown() {
    return this.cards.length > 0 && this.cards[this.cards.length - 1].faceDown;
  }
}