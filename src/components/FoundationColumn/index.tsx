'use client'

import CardSlot from '@/components/CardSlot'
import { Foundation } from '@/types'
import React from 'react'
import styles from '@/components/FoundationColumn/foundationColumn.module.scss'

const FoundationColumn: React.FC<Foundation> = ({ columns }) => {
  return (
    <div className={styles.foundationColumn}>
      {columns.map((slot, slotIndex) => (
        <CardSlot key={`${slotIndex}`} cards={slot} />
      ))}
    </div>
  )
}

export default FoundationColumn
