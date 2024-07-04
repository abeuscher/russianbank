import { Card, CardSlot, Foundation, GameState, PlayerState, Tableau } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initializeDecks } from '@/utils/InitializeDeck';

const initialState: GameState = {
  player: {
    reserve: [],
    hand: [],
    waste: [],
  },
  opponent: {
    reserve: [],
    hand: [],
    waste: [],
  },
  tableauLeft: {
    columns: [],
  },
  tableauRight: {
    columns: [],
  },
  foundationLeft: {
    columns: [],
  },
  foundationRight: {
    columns: [],
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state) => {
      const { playerDeck, opponentDeck } = initializeDecks();

      state.player.reserve = playerDeck.slice(0, 13);
      state.player.reserve[0].faceDown = false;
      state.player.hand = playerDeck.slice(13);
      state.opponent.reserve = opponentDeck.slice(0, 13);
      state.opponent.reserve[0].faceDown = false;
      state.opponent.hand = opponentDeck.slice(13);

      for (let i = 0; i < 4; i++) {
          state.tableauLeft.columns[i] = [Object.assign(state.player.reserve.pop()!,{faceDown:false})];
          state.tableauRight.columns[i] = [Object.assign(state.opponent.reserve.pop()!,{faceDown:false})];
      }
      state.foundationLeft.columns = new Array<CardSlot>(4);
      state.foundationRight.columns = new Array<CardSlot>(4);
    },
    moveCard: (state, action: PayloadAction<{ from: string; to: string; card: Card }>) => {
      // Implement card movement logic
    },
  },
});

export const { initializeGame, moveCard } = gameSlice.actions;
export default gameSlice.reducer;