'use client'

import { PlayingCard as CardType } from '@/types'
import PlayingCard from '@/components/PlayingCard'
import React from 'react'
import styles from '@/components/CardSlot/cardSlot.module.scss'

interface CardSlotType {
  cards: CardType[]
}

const CardSlot: React.FC<CardSlotType> = ({ cards }) => {
  if (!cards) return <div className={styles.emptySlot} />
  if (cards.length === 0 || !Array.isArray(cards)) return <div className={styles.emptySlot} />

  return (
    <div className={styles.cardSlot}>
      {cards.map((card, index) => (
        <PlayingCard key={index} card={card} />
      ))}
    </div>
  )
}

export default CardSlot
