'use client';

import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

import CardSlot from '@/components/gameBoard/CardSlot';
import { initializeGame } from '@/store/gameSlice';
import styles from './gameBoard.module.scss';

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const { playerReserve, opponentReserve, tableau } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.row}>
        <CardSlot cards={playerReserve} position="playerReserve" />
        <div className={styles.emptySlot}></div>
        <CardSlot cards={opponentReserve} position="opponentReserve" />
      </div>

      <div className={styles.tableau}>
        {Array.from({ length: 4 }).map((_, columnIndex) => (
          <div className={styles.column} key={columnIndex}>
            <CardSlot cards={tableau[columnIndex]} position={`player-tableau-${columnIndex}`} />
          </div>
        ))}
        <div className={styles.emptyColumn} />
        {Array.from({ length: 4 }).map((_, columnIndex) => (
          <div className={styles.column} key={columnIndex + 4}>
            <CardSlot cards={tableau[columnIndex + 4]} position={`opponent-tableau-${columnIndex}`} />
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.emptySlot}></div>
        <div className={styles.emptySlot}></div>
        <div className={styles.emptySlot}></div>
      </div>
    </div>
  );
};

export default GameBoard;