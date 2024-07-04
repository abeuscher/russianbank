'use client'

import CardSlot from '@/components/CardSlot'
import { CardSlot as CardSlotType } from '@/types'
import { Tableau } from '@/types'
import styles from '@/components/TableauColumn/tableauColumn.module.scss'

interface TableauColumnProps {
  columns: CardSlotType[]
}
const TableauColumn: React.FC<Tableau> = ({ columns }) => {
  return (
    <div className={styles.tableauColumn}>
      {columns.map((cardSlot, index) => (
        <CardSlot key={`tableau-${index}`} cards={cardSlot.cards} />
      ))}
    </div>
  )
}

export default TableauColumn
