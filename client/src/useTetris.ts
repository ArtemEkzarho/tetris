import { useState, useCallback, useEffect } from 'react'
import { Tetromino, randomTetromino } from './tetrominos'

type Cell = string | number
type Board = Cell[][]
type Position = { x: number; y: number }

const createEmptyBoard = (width: number, height: number): Board =>
  Array.from({ length: height }, () => Array(width).fill(0))

export const useTetris = (width: number = 10, height: number = 20) => {
  const [board, setBoard] = useState<Board>(createEmptyBoard(width, height))
  const [currentTetromino, setCurrentTetromino] = useState<{
    tetromino: Tetromino
    pos: Position
  }>()

  const resetBoard = useCallback(() => {
    const newBoard = createEmptyBoard(width, height)
    setBoard(newBoard)
    setCurrentTetromino({ tetromino: randomTetromino(), pos: { x: width / 2 - 2, y: 0 } })
    spawnTetromino()
  }, [height, width])

  const checkCollision = useCallback(
    (player: { tetromino: Tetromino; pos: Position }, board: Board): boolean => {
      const { tetromino, pos } = player

      for (let y = 0; y < tetromino.length; y++) {
        for (let x = 0; x < tetromino[y].length; x++) {
          // Only check occupied cells in the tetromino (i.e., cells that are not '0')
          if (tetromino[y][x] !== 0) {
            const newX = x + pos.x
            const newY = y + pos.y

            // Check conditions for collision:
            // 1. Tetromino is outside the board's left boundary
            // 2. Tetromino is outside the board's right boundary
            // 3. Tetromino is below the board's bottom boundary
            // 4. Tetromino cell is trying to occupy an already occupied cell in the board
            if (
              newX < 0 ||
              newX >= width ||
              newY >= height ||
              (board[newY] && board[newY][newX] === 'T')
            ) {
              return true
            }
          }
        }
      }
      return false
    },
    [height, width]
  )

  const drop = useCallback(() => {
    if (currentTetromino) {
      const newPos = { x: currentTetromino.pos.x, y: currentTetromino.pos.y + 1 }

      if (!checkCollision({ ...currentTetromino, pos: newPos }, board)) {
        setCurrentTetromino((prev) => ({
          ...prev!,
          pos: newPos,
        }))
      }
    }
  }, [board, checkCollision, currentTetromino])

  const moveLeft = useCallback(() => {
    if (currentTetromino) {
      const newPos = { x: currentTetromino.pos.x - 1, y: currentTetromino.pos.y }

      if (!checkCollision({ ...currentTetromino, pos: newPos }, board)) {
        setCurrentTetromino((prev) => ({
          ...prev!,
          pos: newPos,
        }))
      }
    }
  }, [board, checkCollision, currentTetromino])

  const moveRight = useCallback(() => {
    if (currentTetromino) {
      const newPos = { x: currentTetromino.pos.x + 1, y: currentTetromino.pos.y }

      if (!checkCollision({ ...currentTetromino, pos: newPos }, board)) {
        setCurrentTetromino((prev) => ({
          ...prev!,
          pos: newPos,
        }))
      }
    }
  }, [board, checkCollision, currentTetromino])

  const spawnTetromino = () => {}

  useEffect(() => {
    if (currentTetromino) {
      setBoard((prev) => {
        const newBoard = prev.map((row) => [...row])

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            if (prev[y][x] === 'I') {
              newBoard[y][x] = 0
            }
          }
        }

        currentTetromino.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              newBoard[y + currentTetromino.pos.y][x + currentTetromino.pos.x] = value
            }
          })
        })
        return newBoard
      })
    }
  }, [currentTetromino, height, width])

  return { board, resetBoard, drop, moveLeft, moveRight }
}
