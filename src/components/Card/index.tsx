'use client';

import { Card as CardType } from '@/types';
import React from 'react';
import styles from './card.module.scss';

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const cardClass = card.faceDown ? styles['card-facedown'] : `${styles.card} ${styles[`card-${card.suit}`]} ${styles[`card-${card.value}`]}`;

  return (
    <div className={cardClass}>
      {!card.faceDown && (
        <span>
          {card.value} of {card.suit}
        </span>
      )}
    </div>
  );
};

export default Card;