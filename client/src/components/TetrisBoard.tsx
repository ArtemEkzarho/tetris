import { useEffect } from 'react'
import { Card, Stack } from '@mui/material'
import { getCellColor } from '../helpers'
import useMobileControls from '../hooks/useMobileControls'
import { Board } from '../helpers/types'
import { StartGamePopover } from './StartGamePopover'
import { EndGamePopover } from './EndGamePopover'

type Props = {
  board: Board
  moveTo: ({ x, y }: { x?: number | undefined; y?: number | undefined }) => void
  rotate: () => void
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const TetrisBoard = ({ board, moveTo, rotate, resetBoard }: Props) => {
  useMobileControls(rotate, moveTo)

  // Effect to handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          rotate()
          break
        case 'ArrowDown':
          moveTo({ y: 1 })
          break
        case 'ArrowLeft':
          moveTo({ x: -1 })
          break
        case 'ArrowRight':
          moveTo({ x: 1 })
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [moveTo, rotate])

  return (
    <Stack height="100%" sx={{ position: 'relative' }}>
      <StartGamePopover resetBoard={resetBoard} />
      <EndGamePopover resetBoard={resetBoard} />
      {board.map((row, y) => (
        <Stack flex={1} direction="row" key={y} justifyContent="space-between">
          {row.map((cell, x) => (
            <Card
              variant="outlined"
              key={x}
              sx={{ flex: '1', width: '100%', height: '100%', backgroundColor: getCellColor(cell) }}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  )
}
