'use client';

import { CardSlot } from '@/types/CardSlot';
import React from 'react';
import styles from './playerArea.module.scss';

interface PlayerAreaProps {
  reserve: CardSlot;
  hand: CardSlot;
  waste: CardSlot;
}

const PlayerArea: React.FC<PlayerAreaProps> = ({ reserve, hand, waste }) => {
  return (
    <div className={styles.playerArea}>
      <div className={styles.row}>
        <div className={styles.deck}>
          {reserve.getCards().map((card, index) => (
            <div key={index} className={styles.card}>
              {card.faceDown ? (
                <div className={styles.faceDown}>⧠</div>
              ) : (
                <div className={styles.faceUp}>
                  {card.value} of {card.suit}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.emptySlot}></div>
        <div className={styles.waste}>
          {waste.getCards().map((card, index) => (
            <div key={index} className={styles.card}>
              {card.faceDown ? (
                <div className={styles.faceDown}>⧠</div>
              ) : (
                <div className={styles.faceUp}>
                  {card.value} of {card.suit}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerArea;