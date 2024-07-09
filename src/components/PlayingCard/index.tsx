'use client'

import { PlayingCard as CardType } from '@/types'
import React from 'react'
import styles from '@/components/PlayingCard/playingCard.module.scss'
import { useDrag } from 'react-dnd'

interface CardProps {
  card: CardType
  className?: string
}

const PlayingCard: React.FC<CardProps> = ({ card, className }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: 'CARD',
      item: { card: card },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [card]
  )

  return (
    <div ref={drag} className={className}>
      <span></span>
    </div>
  )
}

export default PlayingCard
