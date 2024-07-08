import { CardSlot, GameState, PlayingCard } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {PlayingCard as CardType} from '@/types';
import { initializeDecks } from '@/utils/InitializeDeck';

const initialState: GameState = {
  player: {
    reserve: { cards: new Array<PlayingCard>(), faceDown: false },
    hand: { cards: new Array<PlayingCard>(), faceDown: true },
    waste: { cards: new Array<PlayingCard>(), faceDown: false },
  },
  opponent: {
    reserve: { cards: new Array<PlayingCard>(), faceDown: false},
    hand: { cards: new Array<PlayingCard>(), faceDown: true },
    waste: { cards: new Array<PlayingCard>(), faceDown: false },
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
      state.player.reserve = { cards: playerDeck.slice(0, 13), faceDown: false};
      state.player.hand = { cards: playerDeck.slice(13), faceDown: true };
      state.opponent.reserve = { cards: opponentDeck.slice(0, 13), faceDown: false};
      state.opponent.hand = { cards: opponentDeck.slice(13), faceDown: true};
      for (let i = 0; i < 4; i++) {
        state.tableauLeft.columns[i] = { cards: [state.player.reserve.cards.pop()!], faceDown: false };
        state.tableauRight.columns[i] = { cards: [state.opponent.reserve.cards.pop()!], faceDown: false };
      }
    },
    moveCard: (state, action: PayloadAction<{ source: PlayingCard, destination: PlayingCard[] }>) => {
      console.log("CARD", action.payload);
      //destination.cards.push(card);
    }
  },
});

export const { initializeGame, moveCard } = gameSlice.actions;
export default gameSlice.reducer;