export interface PlayingCard {
    id: string;
    value: string;
    suit: string;
  }
  export interface CardSlot {
    cards: PlayingCard[];
    faceDown: boolean;
    slotId: string;
  }

  export interface Tableau {
    columns: CardSlot[];
    columnId: string;
  }
  
  export interface Foundation {
    columns: CardSlot[];
    columnId: string;
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
    selectedCard: PlayingCard | null
    draggedCard: PlayingCard | null
    dragTarget: CardSlot | null
  }