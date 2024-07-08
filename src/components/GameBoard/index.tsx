'use client'

import React, { useEffect } from 'react'

import CardSlot from '@/components/CardSlot'
import FoundationColumn from '@/components/FoundationColumn'
import TableauColumn from '@/components/TableauColumn'
import { initializeGame } from '@/store/gameSlice'
import styles from '@/components/GameBoard/gameBoard.module.scss'
import { useDispatch } from 'react-redux'
import useGameState from '@/hooks/useGameState'

const GameBoard = () => {
  const dispatch = useDispatch()
  const { player, opponent, tableauLeft, tableauRight, foundationLeft, foundationRight } =
    useGameState()

  useEffect(() => {
    dispatch(initializeGame())
  }, [dispatch])

  return (
    <div className={styles.gameBoard}>
      <div className={styles.grid}>
        {/* Opponent's Area */}
        <div className={styles.playerArea}>
          <CardSlot cards={opponent.reserve.cards} faceDown={false} />
          <CardSlot cards={opponent.waste.cards} faceDown={false} />
          <CardSlot cards={opponent.hand.cards} faceDown={true} />
        </div>
        <div className={styles.playArea}>
          <TableauColumn columns={tableauLeft.columns} />
          <FoundationColumn columns={foundationLeft.columns} />
          <FoundationColumn columns={foundationRight.columns} />
          <TableauColumn columns={tableauRight.columns} />
        </div>
        {/* Player's Area */}
        <div className={styles.playerArea}>
          <CardSlot cards={player.reserve.cards} faceDown={true} />
          <CardSlot cards={player.waste.cards} faceDown={false} />
          <CardSlot cards={player.hand.cards} faceDown={false} />
        </div>
      </div>
    </div>
  )
}

export default GameBoard
