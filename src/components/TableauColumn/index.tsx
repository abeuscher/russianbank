'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from '@/components/TableauColumn/tableauColumn.module.scss';

interface TableauColumnProps {
  column: { id: string; value: string; suit: string; faceDown: boolean }[];
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