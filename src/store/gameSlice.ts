import { CardSlot, GameState, PlayingCard } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {PlayingCard as CardType} from '@/types';
import { initializeDecks } from '@/utils/InitializeDeck';

const initialState: GameState = {
  player: {
    reserve: { cards: new Array<PlayingCard>() },
    hand: { cards: new Array<PlayingCard>() },
    waste: { cards: new Array<PlayingCard>() },
  },
  opponent: {
    reserve: { cards: new Array<PlayingCard>() },
    hand: { cards: new Array<PlayingCard>() },
    waste: { cards: new Array<PlayingCard>() },
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
  dragSource:  null as CardType | null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeGame: (state) => {
      const { playerDeck, opponentDeck } = initializeDecks();
      state.player.reserve = { cards: playerDeck.slice(0, 13) };
      state.player.reserve.cards[0].faceDown = false;
      state.player.hand = { cards: playerDeck.slice(13) };
      state.opponent.reserve = { cards: opponentDeck.slice(0, 13) };
      state.opponent.reserve.cards[0].faceDown = false;
      state.opponent.hand = { cards: opponentDeck.slice(13) };
      for (let i = 0; i < 4; i++) {
        state.tableauLeft.columns[i] = { cards: [Object.assign(state.player.reserve.cards.pop()!, { faceDown: false })] };
        state.tableauRight.columns[i] = { cards: [Object.assign(state.opponent.reserve.cards.pop()!, { faceDown: false })] };
      }
    },
    moveCard: (state, action: PayloadAction<{ from: string; to: string; card: PlayingCard }>) => {
      // Implement card movement logic
    },
    startDrag: (state, action: PayloadAction<{ card: PlayingCard; source: string }>) => {
      const { card, source } = action.payload;
      state.draggedCard = card;
      state.dragSource = source;
      state.selectedCard = card;
    },
    endDrag: (state) => {
      state.draggedCard = null;
      state.dragSource = null;
      state.selectedCard = null;
    },
    selectCard: (state, action: {}) => {
      //const { location, index } = action.payload;
      console.log(action);
      let selectedCard: PlayingCard | null = null;

      switch (location) {
        case 'playerReserve':
          selectedCard = state.player.reserve.cards[index];
          break;
        case 'playerHand':
          selectedCard = state.player.hand.cards[index];
          break;
        case 'playerWaste':
          selectedCard = state.player.waste.cards[index];
          break;
        case 'opponentReserve':
          selectedCard = state.opponent.reserve.cards[index];
          break;
        case 'opponentHand':
          selectedCard = state.opponent.hand.cards[index];
          break;
        case 'opponentWaste':
          selectedCard = state.opponent.waste.cards[index];
          break;
        case 'tableauLeft':
          selectedCard = state.tableauLeft.columns[index].cards[state.tableauLeft.columns[index].cards.length - 1];
          break;
        case 'tableauRight':
          selectedCard = state.tableauRight.columns[index].cards[state.tableauRight.columns[index].cards.length - 1];
          break;
        // Add cases for foundationLeft and foundationRight if needed
      }

      state.selectedCard = selectedCard;
    },
    deselectCard: (state) => {
      state.selectedCard = null;
    },
  },
});

export const { initializeGame, moveCard, startDrag, endDrag, selectCard, deselectCard } = gameSlice.actions;
export default gameSlice.reducer;