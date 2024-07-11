import { useEffect } from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { getCellColor } from '../helpers'
import { Board } from '../helpers/types'
import { StartGamePopover } from './StartGamePopover'
import { EndGamePopover } from './EndGamePopover'
import { SideBoard } from './SideBoard'
import { useMovements } from '../hooks/useMovements'

type Props = {
  board: Board
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const TetrisBoard = ({ board, resetBoard }: Props) => {
  const { moveTo, rotate, fastDrop } = useMovements()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'z':
          rotate('left')
          break
        case 'x':
          rotate('right')
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
        case 'ArrowUp':
          fastDrop()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [fastDrop, moveTo, rotate])

  return (
    <Grid container height="100%" p={1} spacing={1}>
      <Grid item xs={9} sx={{ position: 'relative' }}>
        <StartGamePopover resetBoard={resetBoard} />
        <EndGamePopover resetBoard={resetBoard} />
        <Stack height="100%">
          {board.map((row, y) => (
            <Stack
              className="cells-container"
              flex={1}
              direction="row"
              key={y}
              justifyContent="space-between"
            >
              {row.map((cell, x) => (
                <Box
                  className={`cell ${cell !== 'EMPTY_CELL' ? 'brick' : ''}`}
                  key={x}
                  style={{ color: getCellColor(cell) }}
                />
              ))}
            </Stack>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <SideBoard resetBoard={resetBoard} />
      </Grid>
    </Grid>
  )
}
