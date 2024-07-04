'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from './cardSlot.module.scss';

interface CardSlotProps {
  cards: { id: string; value: string; suit: string; faceDown: boolean }[];
  position: string;
}

const CardSlot: React.FC<CardSlotProps> = ({ cards, position }) => {
  return (
    <div className={styles.cardSlot}>
      {cards.length > 0 && (
        <Card
          card={cards[0]}
        />
      )}
    </div>
  );
};

export default CardSlot;