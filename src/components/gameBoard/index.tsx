'use client';

import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

import CardSlot from '@/components/gameBoard/CardSlot';
import { initializeGame } from '@/store/gameSlice';
import styles from './gameBoard.module.scss';

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const { playerReserve, opponentReserve, tableau, foundations } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.grid}>
        {/* Player's Reserve */}
        <div className={styles.playerReserve}>
          <CardSlot cards={playerReserve} position="playerReserve" />
        </div>

        {/* Player's Tableau */}
        {tableau.slice(0, 4).map((column, columnIndex) => (
          <div className={styles.tableauColumn} key={columnIndex}>
            {column.map((card, rowIndex) => (
              <CardSlot key={`player-${columnIndex}-${rowIndex}`} cards={[card]} position={`player-tableau-${columnIndex}-${rowIndex}`} />
            ))}
          </div>
        ))}

        {/* Foundations */}
        {Array.from({ length: 4 }).map((_, columnIndex) => (
          <div className={styles.foundationColumn} key={columnIndex}>
            <CardSlot cards={foundations[columnIndex]} position={`foundation-${columnIndex}`} />
          </div>
        ))}

        {/* Opponent's Tableau */}
        {tableau.slice(4).map((column, columnIndex) => (
          <div className={styles.tableauColumn} key={columnIndex + 4}>
            {column.map((card, rowIndex) => (
              <CardSlot key={`opponent-${columnIndex}-${rowIndex}`} cards={[card]} position={`opponent-tableau-${columnIndex}-${rowIndex}`} />
            ))}
          </div>
        ))}

        {/* Opponent's Reserve */}
        <div className={styles.opponentReserve}>
          <CardSlot cards={opponentReserve} position="opponentReserve" />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;