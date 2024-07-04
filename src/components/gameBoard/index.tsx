'use client';

import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

import CardSlot from '@/components/CardSlot';
import { CardSlotData } from '@/types/CardSlotData';
import FoundationColumn from '@/components/FoundationColumn';
import PlayerArea from '@/components/PlayerArea';
import TableauColumn from '@/components/TableauColumn';
import { initializeGame } from '@/store/gameSlice';
import styles from './gameBoard.module.scss';

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const { playerReserve, opponentReserve, tableau, foundations, playerHand, playerWaste, opponentHand, opponentWaste } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.grid}>
        {/* Player's Area */}
        <div className={styles.playerArea}>
          <PlayerArea reserve={new CardSlotData(playerReserve)} hand={new CardSlotData(playerHand)} waste={new CardSlotData(playerWaste)} />
        </div>

        {/* Player's Tableau */}
        <div className={styles.tableauArea}>
          {tableau.slice(0, 4).map((column, columnIndex) => (
            <TableauColumn key={columnIndex} column={column} />
          ))}
        </div>

        {/* Foundations */}
        <div className={styles.foundationArea}>
          {foundations.map((foundationColumn, columnIndex) => (
            <FoundationColumn key={columnIndex} column={foundationColumn} />
          ))}
        </div>

        {/* Opponent's Tableau */}
        <div className={styles.tableauArea}>
          {tableau.slice(4).map((column, columnIndex) => (
            <TableauColumn key={columnIndex + 4} column={column} />
          ))}
        </div>

        {/* Opponent's Area */}
        <div className={styles.opponentArea}>
          <PlayerArea reserve={new CardSlotData(opponentReserve)} hand={new CardSlotData(opponentHand)} waste={new CardSlotData(opponentWaste)} />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;