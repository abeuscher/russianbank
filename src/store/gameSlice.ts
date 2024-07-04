import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initializeDecks } from '@/utils/InitializeDeck';

interface Card {
  id: string;
  value: string;
  suit: string;
  facedown: boolean;
}

interface GameState {
  playerDeck: Card[];
  opponentDeck: Card[];
  playerReserve: Card[];
  opponentReserve: Card[];
  tableau: Card[][];
  foundations: Card[][];
  playerHand: Card[];
  opponentHand: Card[];
  playerWaste: Card[];
  opponentWaste: Card[];
}

const initialState: GameState = {
  playerDeck: [],
  opponentDeck: [],
  playerReserve: [],
  opponentReserve: [],
  tableau: [[], [], [], [], [], [], [], []],
  foundations: [[], [], [], [], [], [], [], []],
  playerHand: [],
  opponentHand: [],
  playerWaste: [],
  opponentWaste: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state) => {
      const { playerDeck, opponentDeck } = initializeDecks();
      state.playerDeck = playerDeck;
      state.opponentDeck = opponentDeck;

      // Distribute cards according to the rules
      state.playerReserve = state.playerDeck.slice(0, 13);
      state.opponentReserve = state.opponentDeck.slice(0, 13);

      state.playerHand = state.playerDeck.slice(13);
      state.opponentHand = state.opponentDeck.slice(13);

      // Initialize tableau
      for (let i = 0; i < 4; i++) {
        state.tableau[i] = [state.playerReserve.pop()!];
        state.tableau[i + 4] = [state.opponentReserve.pop()!];
      }
    },
  },
});

export const { initializeGame } = gameSlice.actions;
export default gameSlice.reducer;
