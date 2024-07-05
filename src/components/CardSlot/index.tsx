'use client'

import { CardSlot as CardSlotType, PlayingCard as PlayingCardType } from '@/types'

import PlayingCard from '@/components/PlayingCard'
import styles from '@/components/CardSlot/cardSlot.module.scss'

const CardSlot: React.FC<CardSlotType> = ({ cards }) => {
  if (!cards || !cards.length) {
    return <div className={styles.emptySlot} />
  }

  return (
    <div className={styles.cardSlot}>
      {cards.map((card: PlayingCardType, index: number) => (
        <PlayingCard key={`${index}`} card={card} />
      ))}
    </div>
  )
}

export default CardSlot
