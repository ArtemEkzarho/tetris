import { BOARD_HEIGHT, BOARD_WIDTH } from './consts'
import { Board, Cell, Collision, Position, Tetromino } from './types'

export const createEmptyBoard = (): Board =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0))

export const getCellColor = (cell: Cell) =>
  ({
    A: 'aqua',
    B: 'blue',
    P: 'purple',
    O: 'orange',
    T: 'darkblue',
    H: 'hotpink',
    G: 'green',
    R: 'red',
    '0': 'white',
  }[cell])

export const checkCollision = (
  player: { tetromino: Tetromino[]; pos: Position; rotation: number },
  board: Board
): Collision => {
  const { tetromino, pos, rotation } = player

  const collision = {
    bottom: false,
    boundary: false,
    otherElements: false,
  }

  for (let y = 0; y < tetromino[rotation].length; y++) {
    for (let x = 0; x < tetromino[rotation][y].length; x++) {
      // Only check occupied cells in the tetromino (i.e., cells that are not '0')
      if (tetromino[rotation][y][x] !== 0) {
        const newX = x + pos.x
        const newY = y + pos.y

        // Check conditions for collision:
        // Tetromino is outside the board's left boundary
        // Tetromino is outside the board's right boundary
        // Tetromino is outside the board's top boundary

        if (newX < 0 || newX >= BOARD_WIDTH || newY < 0) {
          collision.boundary = true
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

export { BOARD_WIDTH, BOARD_HEIGHT } from './consts'
