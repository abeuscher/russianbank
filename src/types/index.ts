export interface PlayingCard {
    id: string;
    value: string;
    suit: string;
    faceDown: boolean;
  }
  export interface CardSlot {
    cards: PlayingCard[];
  }

  export interface Tableau {
    columns: CardSlot[];
  }
  
  export interface Foundation {
    columns: CardSlot[];
  }
  
  export interface PlayerState {
    reserve: CardSlot;
    hand: CardSlot;
    waste: CardSlot;
  }
 
  export interface GameState {
    player: PlayerState;
    opponent: PlayerState;
    tableauLeft: Tableau;
    foundationLeft: Foundation;
    foundationRight: Foundation;
    tableauRight: Tableau;
  }