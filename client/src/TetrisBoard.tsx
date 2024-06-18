import { useEffect } from 'react'

import { Button, Paper, Stack } from '@mui/material'
import { useTetris } from './useTetris'

export type Cell = string | number
export type Board = Cell[][]

export const TetrisBoard = () => {
  const { board, resetBoard, drop, moveLeft, moveRight } = useTetris()

  const startGame = () => {
    resetBoard()
  }

  // Effect to handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          // rotate();
          break
        case 'ArrowDown':
          drop()
          break
        case 'ArrowLeft':
          moveLeft()
          break
        case 'ArrowRight':
          moveRight()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [drop, moveLeft, moveRight])

  return (
    <Stack spacing={1}>
      <Button size="small" onClick={startGame} variant="outlined">
        Start Game
      </Button>
      <Paper>
        <Stack>
          {board.map((row, y) => (
            <Stack direction="row" key={y} justifyContent="space-between">
              {row.map((cell, x) => (
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  key={x}
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: cell === 0 ? 'white' : 'red',
                  }}
                >
                  {cell}
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Stack>
  )
}
