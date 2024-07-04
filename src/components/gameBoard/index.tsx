'use client';

import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

import CardSlot from '@/components/CardSlot';
import { CardSlotData } from '@/types/CardSlotData';
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
        <PlayerArea reserve={new CardSlotData(playerReserve)} hand={new CardSlotData(playerHand)} waste={new CardSlotData(playerWaste)} />

        {tableau.slice(0, 4).map((column, columnIndex) => (
          <TableauColumn key={columnIndex} column={column} />
        ))}

        <div className={styles.foundationArea}>
          {foundations.map((foundationColumn, columnIndex) => (
            <div key={columnIndex} className={styles.foundationColumn}>
              <CardSlot cards={foundationColumn} />
            </div>
          ))}
        </div>

        {tableau.slice(4).map((column, columnIndex) => (
          <TableauColumn key={columnIndex + 4} column={column} />
        ))}

        <PlayerArea reserve={new CardSlotData(opponentReserve)} hand={new CardSlotData(opponentHand)} waste={new CardSlotData(opponentWaste)} />
      </div>
    </div>
  );
};

export default GameBoard;