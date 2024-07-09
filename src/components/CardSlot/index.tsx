'use client'

import { DropTargetMonitor, useDrop } from 'react-dnd'

import { CardSlot as CardSlotType } from '@/types'
import PlayingCard from '@/components/PlayingCard'
import { moveCard } from '@/store/gameSlice'
import store from '@/store'
import styles from '@/components/CardSlot/cardSlot.module.scss'
import { useDispatch } from 'react-redux'

const CardSlot: React.FC<CardSlotType> = ({ cards, faceDown, slotId }) => {
  const dispatch = useDispatch()
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => {
      console.log(monitor.isOver())
      dispatch(moveCard({ card: item.card, destinationId: slotId }))
      console.log(store.getState())
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    hover: (item, monitor) => {
      //console.log('Hover:', slotId)
    }
  })

  if (!cards || !cards.length) {
    return <div ref={drop} className={`${styles.emptySlot}`} />
  }
  const cardClass = faceDown
    ? `${styles.card} ${styles['card-facedown']}`
    : `${styles.card} ${styles[`card-${cards[0].suit}`]} ${styles[`card-${cards[0].value.toLowerCase()}`]}`
  return (
    <div ref={drop} className={`${styles.cardSlot}`}>
      <PlayingCard card={cards[0]} className={cardClass} />
    </div>
  )
}

export default CardSlot
