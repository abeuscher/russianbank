'use client';

import CardSlot from '@/components/CardSlot';
import React from 'react';
import { Tableau } from '@/types';
import styles from '@/components/TableauColumn/tableauColumn.module.scss';

const TableauColumn: React.FC<Tableau> = ({ columns }) => {

  return (
    <div className={styles.tableauColumn}>
      {columns.map((cards, slotIndex) => (
        <CardSlot key={`${slotIndex}`} cards={cards} />
      ))}
    </div>
  );
};

export default TableauColumn;