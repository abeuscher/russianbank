'use client'

import CardSlot from '@/components/CardSlot'
import { CardSlot as CardSlotType } from '@/types'
import { Tableau } from '@/types'
import styles from '@/components/TableauColumn/tableauColumn.module.scss'

const TableauColumn: React.FC<Tableau> = ({ columns, columnId }) => {
  return (
    <div className={styles.tableauColumn}>
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

export default TableauColumn
