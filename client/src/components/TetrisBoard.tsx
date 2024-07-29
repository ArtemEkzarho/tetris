import { Box, Stack } from '@mui/material'
import '../styles.css'
import { TetroCell } from './TetroCell'
import { useAtomValue } from 'jotai'
import { boardAtom } from '../common/atoms'
import { useState } from 'react'
import { useMovements } from '../hooks'

export const TetrisBoard = () => {
  const board = useAtomValue(boardAtom)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const { moveTo, rotate } = useMovements()

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX)
    setTouchStartY(event.touches[0].clientY)
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    event.preventDefault()
    const touch = event.touches[0]
    const dx = touch.clientX - (touchStartX ?? 0)
    const dy = touch.clientY - (touchStartY ?? 0)

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        moveTo({ x: 1 })
      } else {
        moveTo({ x: -1 })
      }
    } else {
      if (dy > 0) {
        moveTo({ y: 1 })
      }
    }
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX
    const touchEndY = event.changedTouches[0].clientY
    const dx = touchEndX - (touchStartX ?? 0)
    const dy = touchEndY - (touchStartY ?? 0)

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      // Tap detected
      if ((touchStartX ?? 0) > window.innerWidth / 2) {
        rotate('right')
      } else {
        rotate('left')
      }
    } else if (dy > 50) {
      moveTo({ y: 1 }) //need realize hard drop
    } else if (dy < -50) {
      moveTo({ y: -1 })
    }

    setTouchStartX(null)
    setTouchStartY(null)
  }

  return board.map((row, y) => (
    <Stack
      flex={1}
      direction="row"
      key={y}
      justifyContent="space-between"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {row.map((cell, x) => (
        <Box key={x} flex={1} className="tetro-cell-wrap">
          {cell !== 'EMPTY_CELL' ? <TetroCell cell={cell} /> : null}
        </Box>
      ))}
    </Stack>
  ))
}
