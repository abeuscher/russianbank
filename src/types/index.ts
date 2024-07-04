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
    columns: Card[][];
  }
  
  export interface PlayerState {
    reserve: Card[];
    hand: Card[];
    waste: Card[];
  }
  
  export interface GameState {
    player: PlayerState;
    opponent: PlayerState;
    tableauLeft: Tableau;
    foundationLeft: Foundation;
    foundationRight: Foundation;
    tableauRight: Tableau;
  }