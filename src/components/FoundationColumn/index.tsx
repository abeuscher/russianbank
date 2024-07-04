'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from './foundationColumn.module.scss';
import useGameState from '@/hooks/useGameState';

const FoundationColumn: React.FC<{ columnIndex: number }> = ({ columnIndex }) => {
  const { foundations } = useGameState();

  return (
    <div className={styles.foundationColumn}>
      {foundations.piles[columnIndex].map((card, index) => (
        <Card key={`f-${columnIndex}-${index}`} card={card} />
      ))}
    </div>
  );
};

export default FoundationColumn;