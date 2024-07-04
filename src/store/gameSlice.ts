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
  tableau: {
    columns: Array.from({ length: 8 }, () => []),
  },
  foundations: {
    piles: Array.from({ length: 4 }, () => []),
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
        state.tableau.columns[i].push(state.player.reserve.pop()!);
        state.tableau.columns[i + 4].push(state.opponent.reserve.pop()!);
      }
    },
    moveCard: (state, action: PayloadAction<{ from: string; to: string; card: Card }>) => {
      // Implement card movement logic
    },
  },
});

export const { initializeGame, moveCard } = gameSlice.actions;
export default gameSlice.reducer;