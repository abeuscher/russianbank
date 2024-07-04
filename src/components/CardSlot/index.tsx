'use client'

import { deselectCard, selectCard } from '@/store/gameSlice'

import PlayingCard from '@/components/PlayingCard'
import { PlayingCard as PlayingCardType } from '@/types'
import React from 'react'
import styles from '@/components/CardSlot/cardSlot.module.scss'
import { useDispatch } from 'react-redux'

interface CardSlotProps {
  columnIndex: number
  slotIndex: number
  cards: PlayingCardType[]
}

const CardSlot: React.FC<CardSlotProps> = ({ columnIndex, slotIndex, cards }) => {
  const dispatch = useDispatch()

  const handleCardClick = () => {
    dispatch(selectCard({ columnIndex, slotIndex }))
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(selectCard({ columnIndex, slotIndex }))
  }

  const handleMouseUp = () => {
    dispatch(deselectCard())
  }

  return (
    <div className={styles.cardSlot} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      {cards.map((card, index) => (
        <PlayingCard
          key={`${columnIndex}-${slotIndex}-${index}`}
          card={card}
          onClick={handleCardClick}
        />
      ))}
    </div>
  )
}

export default CardSlot
