'use client'

import Card from '@/components/gameBoard/Card';
import React from 'react';
import styles from './cardSlot.module.scss';

interface CardSlotProps {
  cards: { id: string; value: string; suit: string; facedown: boolean }[];
  position: string;
}

const CardSlot: React.FC<CardSlotProps> = ({ cards, position }) => {
  return (
    <div className={styles.cardSlot}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          suit={card.suit}
          value={card.value}
          faceDown={card.facedown}
          style={{
            position: 'absolute',
            bottom: `${index * 0.2}em`,
            left: '0',
          }}
        />
      ))}
    </div>
  );
};

export default CardSlot;