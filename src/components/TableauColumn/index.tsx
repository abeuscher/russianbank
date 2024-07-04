'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from '@/components/TableauColumn/tableauColumn.module.scss';

interface TableauColumnProps {
  columns: { id: string; value: string; suit: string; faceDown: boolean }[];
}

const TableauColumn: React.FC<TableauColumnProps> = ({ columns }) => {
  return (
    <div className={styles.tableauColumn}>
      {columns.map((card, rowIndex) => (
        <Card key={`${rowIndex}`} card={card} />
      ))}
    </div>
  );
};

export default TableauColumn;