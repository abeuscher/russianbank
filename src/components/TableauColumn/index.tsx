'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from './tableauColumn.module.scss';
import { useGameState } from '@/hooks';

const TableauColumn: React.FC<{ columnIndex: number }> = ({ columnIndex }) => {
  const { tableau } = useGameState();

  return (
    <div className={styles.tableauColumn}>
      {tableau.columns[columnIndex].map((card, rowIndex) => (
        <Card key={`${columnIndex}-${rowIndex}`} card={card} />
      ))}
    </div>
  );
};

export default TableauColumn;