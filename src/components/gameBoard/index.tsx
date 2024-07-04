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
  const { player, opponent, tableauLeft, tableauRight, foundationLeft, foundationRight } = useGameState();
  console.log(tableauLeft);
  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <div className={styles.gameBoard}>
      <div className={styles.grid}>

        {/* Opponent's Area */}
        <div className={styles.opponentArea}>
          <PlayerArea />
        </div>

        <div className={styles.playArea}>
            <TableauColumn columns={tableauLeft.columns.flat()} />
            <FoundationColumn columns={foundationLeft.columns.flat()} />
            <FoundationColumn columns={foundationRight.columns.flat()} />
            <TableauColumn columns={tableauRight.columns.flat()} />
        </div>
        {/* Player's Area */}
        <div className={styles.playerArea}>
          <PlayerArea />
        </div>

      </div>
    </div>
  );
};

export default GameBoard;