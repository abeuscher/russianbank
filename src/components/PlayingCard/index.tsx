'use client'

import { PlayingCard as CardType } from '@/types'
import React from 'react'
import styles from './playingCard.module.scss'

interface CardProps {
  card: CardType
}

const PlayingCard: React.FC<CardProps> = ({ card }) => {
  const cardClass = card.faceDown
    ? styles['card-facedown']
    : `${styles.card} ${styles[`card-${card.suit}`]} ${styles[`card-${card.value}`]}`

  return (
    <div className={cardClass}>
      {!card.faceDown && (
        <span>
          {card.value} of {card.suit}
        </span>
      )}
    </div>
  )
}

export default PlayingCard
