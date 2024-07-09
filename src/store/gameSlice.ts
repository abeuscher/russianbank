import { CardSlot, GameState, PlayingCard } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {PlayingCard as CardType} from '@/types';
import { initializeDecks } from '@/utils/InitializeDeck';

const initialState: GameState = {
  player: {
    reserve: { cards: new Array<PlayingCard>(), faceDown: false, slotId: 'player-reserve'},
    hand: { cards: new Array<PlayingCard>(), faceDown: true, slotId: 'player-hand'},
    waste: { cards: new Array<PlayingCard>(), faceDown: false, slotId: 'player-waste'},
  },
  opponent: {
    reserve: { cards: new Array<PlayingCard>(), faceDown: false, slotId: 'opponent-reserve'},
    hand: { cards: new Array<PlayingCard>(), faceDown: true, slotId: 'opponent-hand'},
    waste: { cards: new Array<PlayingCard>(), faceDown: false, slotId: 'opponent-waste'},
  },
  tableauLeft: {
    columns: new Array<CardSlot>(4),
    columnId: 'tableau-left',
  },
  tableauRight: {
    columns: new Array<CardSlot>(4),
    columnId: 'tableau-right',
  },
  foundationLeft: {
    columns: new Array<CardSlot>(4),
    columnId: 'foundation-left',
  },
  foundationRight: {
    columns: new Array<CardSlot>(4),
    columnId: 'foundation-right',
  },
  selectedCard: null as CardType | null,
  draggedCard:  null as CardType | null,
  dragTarget:  null as CardSlot | null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state) => {
      const { playerDeck, opponentDeck } = initializeDecks();
      state.player.reserve = { cards: playerDeck.slice(0, 13), faceDown: false, slotId: 'player-reserve'};
      state.player.hand = { cards: playerDeck.slice(13), faceDown: true, slotId: 'player-hand'};
      state.opponent.reserve = { cards: opponentDeck.slice(0, 13), faceDown: false, slotId: 'opponent-reserve'};
      state.opponent.hand = { cards: opponentDeck.slice(13), faceDown: true, slotId: 'opponent-hand'};
      for (let i = 0; i < 4; i++) {
        state.tableauLeft.columns[i] = { cards: [state.player.reserve.cards.pop()!], faceDown: false, slotId: `tableau-left-${i}` };
        state.tableauRight.columns[i] = { cards: [state.opponent.reserve.cards.pop()!], faceDown: false, slotId: `tableau-right-${i}`};
      }
    },
    moveCard: (state: GameState, action: PayloadAction<{ card: PlayingCard, destinationId?: string | 0 }>) => {
      
      const { card, destinationId } = action.payload;
      if (destinationId === 0 || !card) {
        return;
      }
      const findCard = (thisCard: PlayingCard) => {
        let theSlot = {slot: {} as CardSlot, index: 0};
        for (const section of [state.player.reserve, state.player.hand, state.player.waste, state.opponent.reserve, state.opponent.hand, state.opponent.waste]) {
          const index = section.cards.findIndex(card => card.id === thisCard.id);
          if (index !== -1) {
            theSlot =  {slot:section,index:index};
          }
        }
        [state.tableauLeft, state.tableauRight].forEach((tableau, tableauIdx) => {
          tableau.columns.forEach((column, idx) => {
            const index = column.cards.findIndex(card => card.id === thisCard.id);
            if (index !== -1) {
              console.log("Tableau Card found", tableau.columns[idx])   
              theSlot =  {slot:column,index:index};
            }
          })
        });
        [state.foundationLeft, state.foundationRight].forEach((foundation, foundationIdx) => {
          foundation.columns.forEach((column, idx) => {
            const index = column.cards.findIndex(card => card.id === thisCard.id);
            if (index !== -1) {
              console.log("Foundation Card found", column.cards, foundation.columns, idx)   
              theSlot =  {slot:column,index:index};
            }
          });
        });
        return theSlot;
      }
      function capitalizeFirstLetter(char: string) {
          return char.charAt(0).toUpperCase() + char.slice(1);
      }
      const {slot, index} = findCard(card);
      
      const sourceColumn = slot?.slotId.split("-");
      if (!sourceColumn) {
        return;
      }
      const destinationColumn = destinationId.split("-");
      console.log( slot, "sourceColumn", sourceColumn, "destinationColumn", destinationColumn)
      if (sourceColumn.length===3) {
        state[sourceColumn[0] + capitalizeFirstLetter(sourceColumn[1])].columns[parseInt(sourceColumn[2])].cards.splice(index, 1);
      }
      else {
        state[sourceColumn[0]][sourceColumn[1]].cards.splice(index, 1);
      }
      if (destinationColumn.length===3) {
        state[destinationColumn[0] + capitalizeFirstLetter(destinationColumn[1])].columns[parseInt(destinationColumn[2])].cards.unshift(card);
      }
      else {
        state[destinationColumn[0]][destinationColumn[1]].cards.unshift(card);
      }
    }
  },
});

export const { initializeGame, moveCard } = gameSlice.actions;
export default gameSlice.reducer;