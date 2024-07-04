export interface Card {
    id: string;
    value: string;
    suit: string;
    faceDown: boolean;
  }
  
  export interface Tableau {
    columns: Card[][];
  }
  
  export interface Foundation {
    piles: Card[][];
  }
  
  export interface PlayerState {
    reserve: Card[];
    hand: Card[];
    waste: Card[];
  }
  
  export interface GameState {
    player: PlayerState;
    opponent: PlayerState;
    tableau: Tableau;
    foundations: Foundation;
  }