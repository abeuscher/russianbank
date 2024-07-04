'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from '@/components/FoundationColumn/foundationColumn.module.scss';

interface FoundationColumnProps {
  column: { id: string; value: string; suit: string; faceDown: boolean }[];
}

const FoundationColumn: React.FC<FoundationColumnProps> = ({ column }) => {
  return (
    <div className={styles.foundationColumn}>
      {column.map((card, index) => (
        <Card key={`${index}`} card={card} />
      ))}
    </div>
  );
};

export default FoundationColumn;