'use client'

import CardSlot from '@/components/CardSlot'
import { Foundation } from '@/types'
import React from 'react'
import styles from '@/components/FoundationColumn/foundationColumn.module.scss'

const FoundationColumn: React.FC<Foundation> = ({ columns, columnId }) => {
  return (
    <div className={styles.foundationColumn}>
      {columns.map((cardSlot, index) => (
        <CardSlot
          key={`${columnId}-${index}`}
          slotId={`${columnId}-${index}`}
          cards={cardSlot.cards}
          faceDown={false}
        />
      ))}
    </div>
  )
}

export default FoundationColumn
