'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from '@/components/TableauColumn/tableauColumn.module.scss';
import { useGameState } from '@/hooks/useGameState';

interface TableauColumnProps {
  column: Card[];
}

const TableauColumn: React.FC<TableauColumnProps> = ({ column }) => {
  return (
    <div className={styles.tableauColumn}>
      {column.map((card, rowIndex) => (
        <Card key={`${rowIndex}`} card={card} />
      ))}
    </div>
  );
};

export default TableauColumn;