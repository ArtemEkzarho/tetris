import { useCallback, useEffect } from 'react'
import { randomTetromino } from './tetrominos'
import { BOARD_HEIGHT, BOARD_WIDTH, createEmptyBoard, checkCollision } from './consts'
import { useMovements } from './useMovements'
import { useAtom, useAtomValue } from 'jotai'
import { boardAtom, currentTetrominoAtom, prevTetrominoAtom } from './atoms'

export const useTetris = () => {
  const [board, setBoard] = useAtom(boardAtom)
  const [currentTetromino, setCurrentTetromino] = useAtom(currentTetrominoAtom)
  const prevTetromino = useAtomValue(prevTetrominoAtom)
  const { moveTo } = useMovements()

  const resetBoard = useCallback(() => {
    const newBoard = createEmptyBoard()
    setBoard(newBoard)
    setCurrentTetromino({ tetromino: randomTetromino(), pos: { x: BOARD_WIDTH / 2 - 2, y: 0 } })
  }, [setBoard, setCurrentTetromino])

  useEffect(() => {
    if (currentTetromino) {
      setBoard((prev) => {
        const newBoard = prev.map((row) => [...row])

        for (let y = 0; y < BOARD_HEIGHT; y++) {
          for (let x = 0; x < BOARD_WIDTH; x++) {
            if (prev[y][x] === 'I') {
              newBoard[y][x] = 0
            }
          }
        }

        if (!checkCollision(currentTetromino, newBoard)) {
          currentTetromino.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 0) {
                newBoard[y + currentTetromino.pos.y][x + currentTetromino.pos.x] = value
              }
            })
          })

          return newBoard
        } else {
          setCurrentTetromino(prevTetromino)
          return prev
        }
      })
    }
  }, [currentTetromino, prevTetromino, setBoard, setCurrentTetromino])

  useEffect(() => {
    const interval = setInterval(() => {
      moveTo({ y: 1 })
    }, 500)

    return () => clearInterval(interval)
  }, [moveTo])

  return { board, resetBoard, moveTo }
}
