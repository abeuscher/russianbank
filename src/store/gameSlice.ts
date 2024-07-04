import { CardSlot, GameState, PlayingCard } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initializeDecks } from '@/utils/InitializeDeck';

const initialState: GameState = {
  player: {
    reserve: {cards: new Array<PlayingCard>()},
    hand: {cards: new Array<PlayingCard>()},
    waste: {cards: new Array<PlayingCard>()},
  },
  opponent: {
    reserve: {cards: new Array<PlayingCard>()},
    hand:{cards: new Array<PlayingCard>()},
    waste:{cards: new Array<PlayingCard>()},
  },
  tableauLeft: {
    columns: new Array<CardSlot>(4),
  },
  tableauRight: {
    columns: new Array<CardSlot>(4),
  },
  foundationLeft: {
    columns: new Array<CardSlot>(4),
  },
  foundationRight: {
    columns: new Array<CardSlot>(4),
  },
  selectedCard: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state) => {
      const { playerDeck, opponentDeck } = initializeDecks();

      state.player.reserve = {cards: playerDeck.slice(0, 13) };
      state.player.reserve.cards[0].faceDown = false;
      state.player.hand = {cards:playerDeck.slice(13)};
      state.opponent.reserve = {cards:opponentDeck.slice(0, 13)};
      state.opponent.reserve.cards[0].faceDown = false;
      state.opponent.hand = {cards: opponentDeck.slice(13) };

      for (let i = 0; i < 4; i++) {
          state.tableauLeft.columns[i] = {cards: [Object.assign(state.player.reserve.cards.pop()!,{faceDown:false})]};
          state.tableauRight.columns[i] = {cards: [Object.assign(state.opponent.reserve.cards.pop()!,{faceDown:false})]};
      }

    },
    moveCard: (state, action: PayloadAction<{ from: string; to: string; card: PlayingCard }>) => {
      // Implement card movement logic
    },
    selectCard: (state, action: PayloadAction<{ columnIndex: number; slotIndex: number }>) => {
      const { columnIndex, slotIndex } = action.payload;
      const selectedCard = state.gameBoard[columnIndex][slotIndex].cards[state.gameBoard[columnIndex][slotIndex].cards.length - 1];
      state.selectedCard = selectedCard;
    },
    deselectCard: (state) => {
      state.selectedCard = null;
    },
  },
});

export const { initializeGame, selectCard, deselectCard } = gameSlice.actions;
export default gameSlice.reducer;