import { useEffect } from 'react'
import { Button, Card, Stack } from '@mui/material'
import { useTetris } from './useTetris'
import { useAtomValue } from 'jotai'
import { prevTetrominoAtom, currentTetrominoAtom } from './atoms'

export const TetrisBoard = () => {
  const { board, resetBoard, moveTo } = useTetris()
  const prevTetromino = useAtomValue(prevTetrominoAtom)
  const currentTetromino = useAtomValue(currentTetrominoAtom)

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
          // drop()
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
  }, [moveTo])

  return (
    <Stack spacing={1}>
      <Button size="small" onClick={startGame} variant="outlined">
        Start Game
      </Button>

      <Stack>
        {board.map((row, y) => (
          <Stack direction="row" key={y} justifyContent="space-between">
            {row.map((cell, x) => (
              <Card
                variant="outlined"
                key={x}
                sx={{ width: 30, height: 30, backgroundColor: cell === 0 ? 'white' : 'red' }}
              />
            ))}
          </Stack>
        ))}
      </Stack>
      <div>prevTetromino</div>
      <div>
        <pre>{JSON.stringify(prevTetromino?.pos, null, 2)}</pre>
      </div>
      <div>currentTetromino</div>
      <div>
        <pre>{JSON.stringify(currentTetromino?.pos, null, 2)}</pre>
      </div>
    </Stack>
  )
}
