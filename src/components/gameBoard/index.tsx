'use client';

import React, { useEffect } from 'react';

import FoundationColumn from '@/components/FoundationColumn';
import PlayerArea from '@/components/PlayerArea';
import TableauColumn from '@/components/TableauColumn';
import { initializeGame } from '@/store/gameSlice';
import styles from '@/components/GameBoard/gameBoard.module.scss';
import { useDispatch } from 'react-redux';
import { useGameState } from '@/hooks';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { player, opponent, tableau, foundations } = useGameState();

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.grid}>
        {/* Player's Area */}
        <div className={styles.playerArea}>
          <PlayerArea />
        </div>

        {/* Player's Tableau */}
        <div className={styles.tableauArea}>
          {tableau.columns.map((_, columnIndex) => (
            <TableauColumn key={columnIndex} columnIndex={columnIndex} />
          ))}
        </div>

        {/* Foundations */}
        <div className={styles.foundationArea}>
          {foundations.piles.map((_, columnIndex) => (
            <FoundationColumn key={columnIndex} columnIndex={columnIndex} />
          ))}
        </div>

        {/* Opponent's Tableau */}
        <div className={styles.tableauArea}>
          {tableau.columns.map((_, columnIndex) => (
            <TableauColumn key={columnIndex + 4} columnIndex={columnIndex + 4} />
          ))}
        </div>

        {/* Opponent's Area */}
        <div className={styles.opponentArea}>
          <PlayerArea />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;