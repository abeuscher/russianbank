'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from '@/components/FoundationColumn/foundationColumn.module.scss';

interface FoundationColumnProps {
  columns: { id: string; value: string; suit: string; faceDown: boolean }[];
}

const FoundationColumn: React.FC<FoundationColumnProps> = ({ columns }) => {
  return (
    <div className={styles.foundationColumn}>
      {columns.map((card, index) => (
        <Card key={`${index}`} card={card} />
      ))}
    </div>
  );
};

export default FoundationColumn;