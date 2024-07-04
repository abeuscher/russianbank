'use client';

import { CardSlot } from './CardSlot';
import React from 'react';
import styles from './foundationColumn.module.scss';

interface FoundationColumnProps {
  column: CardSlot;
}

const FoundationColumn: React.FC<FoundationColumnProps> = ({ column }) => {
  return (
    <div className={styles.foundationColumn}>
      {column.getCards().map((card, index) => (
        <div key={index} className={styles.card}>
          {card.faceDown ? (
            <div className={styles.faceDown}>⧠</div>
          ) : (
            <div className={styles.faceUp}>
              {card.value} of {card.suit}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FoundationColumn;