'use client'

import CardSlot from '@/components/CardSlot'
import { CardSlot as CardSlotType } from '@/types'
import React from 'react'
import styles from '@/components/FoundationColumn/foundationColumn.module.scss'

interface FoundationColumnProps {
  columns: CardSlotType[]
}

const FoundationColumn: React.FC<FoundationColumnProps> = ({ columns }) => {
  return (
    <div className={styles.foundationColumn}>
      {columns.map((cardSlot, index) => (
        <CardSlot key={`foundation-${index}`} cards={cardSlot.cards} />
      ))}
    </div>
  )
}

export default FoundationColumn
