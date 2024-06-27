import { BOARD_HEIGHT, BOARD_WIDTH } from './consts'
import { randomTetromino } from './tetrominos'
import { Board, Cell, Collision, Position, Tetromino, TetrominoConfig } from './types'

export const createEmptyBoard = (): Board =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0))

export const getCellColor = (cell: Cell) =>
  ({
    I: 'aqua',
    J: 'blue',
    L: 'purple',
    O: 'orange',
    P: 'darkblue',
    T: 'hotpink',
    S: 'green',
    Z: 'red',
    '0': 'white',
  }[cell])

export const getNewTetromino = (): TetrominoConfig => {
  return {
    tetromino: randomTetromino(),
    pos: { x: BOARD_WIDTH / 2 - 2, y: -1 },
    direction: 'down',
    rotation: 0,
  }
}

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
        if (board[newY] && board[newY][newX] === 'P') {
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

export function canPlaceTetromino(
  player: { tetromino: Tetromino[]; pos: Position; rotation: number },
  board: Board
) {
  const { tetromino, pos, rotation } = player

  for (let y = 0; y < tetromino[rotation].length; y++) {
    for (let x = 0; x < tetromino[y].length; x++) {
      if (tetromino[rotation][y][x] !== 0) {
        // part of the tetromino
        const boardX = x + pos.x
        const boardY = y + pos.y

        // Check if the tetromino is out of the board's bounds
        if (boardX < 0 || boardX >= board[0].length || boardY >= board.length) {
          return false
        }

        // Check if the position is already occupied on the board
        if (board[boardY][boardX] !== 0) {
          return false
        }
      }
    }
  }
  return true
}

export const checkForCompleteLines = (board: Board) => {
  let linesCleared = 0
  const width = board[0].length
  const newBoard = board.filter((row) => row.some((cell) => cell === 0)) // Keep only non-full rows

  linesCleared = board.length - newBoard.length // Count how many lines were cleared

  // For each cleared line, add an empty row at the top of the board
  while (newBoard.length < board.length) {
    newBoard.unshift(Array(width).fill(0)) // 0 is the value for an empty cell
  }

  return { clearedBoard: newBoard, linesCleared }
}

export const countScore = (linesCleared: number, level: number) => {
  //   Level 1:
  // - Single line clear: 40 * (1 + 1) = 80 points
  // - Double line clear: 100 * (1 + 1) = 200 points
  // - Triple line clear: 300 * (1 + 1) = 600 points
  // - Tetris (four lines): 1200 * (1 + 1) = 2400 points

  // Level 2:
  // - Single line clear: 40 * (2 + 1) = 120 points
  // - Double line clear: 100 * (2 + 1) = 300 points
  // - Triple line clear: 300 * (2 + 1) = 900 points
  // - Tetris (four lines): 1200 * (2 + 1) = 3600 points

  let score = 0
  switch (linesCleared) {
    case 1:
      score = 40 * (level + 1)
      break
    case 2:
      score = 100 * (level + 1)
      break
    case 3:
      score = 300 * (level + 1)
      break
    case 4:
      score = 1200 * (level + 1)
      break
    default:
      score = 0
  }
  return score
}

export { BOARD_WIDTH, BOARD_HEIGHT } from './consts'
