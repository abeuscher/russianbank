'use client';

import Card from '@/components/Card';
import React from 'react';
import styles from './cardSlot.module.scss';

interface CardSlotProps {
  cards: { id: string; value: string; suit: string; facedown: boolean }[];
  position: string;
}

const CardSlot: React.FC<CardSlotProps> = ({ cards, position }) => {
  return (
    <div className={styles.cardSlot}>
      {cards.length > 0 && (
        <Card
          suit={cards[0].suit}
          value={cards[0].value}
          faceDown={cards[0].facedown}
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
        />
      )}
    </div>
  );
};

export default CardSlot;