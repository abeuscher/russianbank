'use client';

import { CardSlot } from '../CardSlot';
import React from 'react';
import styles from './tableauColumn.module.scss';

interface TableauColumnProps {
  column: CardSlot[];
}

const TableauColumn: React.FC<TableauColumnProps> = ({ column }) => {
  return (
    <div className={styles.tableauColumn}>
      {column.map((card, index) => (
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

export default TableauColumn;