'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from './playerArea.module.scss';
import { useGameState } from '@/hooks';

const PlayerArea: React.FC = () => {
  const { player } = useGameState();
  console.log("Player Area", player )
  return (
    <div className={styles.playerArea}>
      <div className={styles.row}>
        <div className={styles.deck}>
          {player.reserve.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <div className={styles.emptySlot}></div>
        <div className={styles.waste}>
          {player.waste.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerArea;