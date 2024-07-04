import { Card, Foundation, GameState, PlayerState, Tableau } from '@/types';
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
    columns: Array.from({ length: 4 }, () => []),
  },
  foundationLeft: {
    columns: Array.from({ length: 4 }, () => []),
  },
  foundationRight: {
    columns: Array.from({ length: 4 }, () => []),
  },
  tableauRight: {
    columns: Array.from({ length: 4 }, () => []),
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state) => {
      const { playerDeck, opponentDeck } = initializeDecks();

      state.player.reserve = playerDeck.slice(0, 13);
      state.player.hand = playerDeck.slice(13);
      state.opponent.reserve = opponentDeck.slice(0, 13);
      state.opponent.hand = opponentDeck.slice(13);

      for (let i = 0; i < 4; i++) {
        state.tableauLeft.columns[i] = [Object.assign(state.player.hand.pop()!, { faceDown: false })];
        state.tableauRight.columns[i] = [Object.assign(state.opponent.hand.pop()!, { faceDown: false })];
      }
    },
    moveCard: (state, action: PayloadAction<{ from: string; to: string; card: Card }>) => {
      // Implement card movement logic
    },
  },
});

export const { initializeGame, moveCard } = gameSlice.actions;
export default gameSlice.reducer;