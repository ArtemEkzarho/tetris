import { Tetromino } from './tetrominos'
import { Board, Position } from './types'

export const BOARD_HEIGHT = 20
export const BOARD_WIDTH = 10

export const createEmptyBoard = (): Board =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0))

export const checkCollision = (
  player: { tetromino: Tetromino; pos: Position },
  board: Board
): boolean => {
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
          newX >= BOARD_WIDTH ||
          newY >= BOARD_HEIGHT ||
          (board[newY] && board[newY][newX] === 'T')
        ) {
          return true
        }
      }
    }
  }
  return false
}
