import { Tetromino } from './tetrominos'
import { Board, Cell, Collision, Position } from './types'

export const BOARD_HEIGHT = 20
export const BOARD_WIDTH = 10

export const createEmptyBoard = (): Board =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0))

export const getCellColor = (cell: Cell) =>
  ({ A: 'aqua', B: 'blue', P: 'purple', Y: 'yellow', T: 'darkblue', '0': 'white' }[cell])

export const checkCollision = (
  player: { tetromino: Tetromino; pos: Position },
  board: Board
): Collision => {
  const { tetromino, pos } = player

  const collision = {
    bottom: false,
    sides: false,
    otherElements: false,
  }

  for (let y = 0; y < tetromino.length; y++) {
    for (let x = 0; x < tetromino[y].length; x++) {
      // Only check occupied cells in the tetromino (i.e., cells that are not '0')
      if (tetromino[y][x] !== 0) {
        const newX = x + pos.x
        const newY = y + pos.y

        // Check conditions for collision:
        // Tetromino is outside the board's left boundary
        // Tetromino is outside the board's right boundary

        if (newX < 0 || newX >= BOARD_WIDTH) {
          collision.sides = true
        }
        // Tetromino cell is trying to occupy an already occupied cell in the board
        if (board[newY] && board[newY][newX] === 'T') {
          collision.otherElements = true
        }

        // Tetromino is below the board's bottom boundary
        if (newY >= BOARD_HEIGHT) {
          collision.bottom = true
        }
      }
    }
  }
  return collision
}
