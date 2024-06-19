import { FallingTetrominoCell } from './types'

export type Tetromino = (FallingTetrominoCell | 0)[][]

interface Tetrominos {
  [key: string]: Tetromino
}

export const TETROMINOS: Tetrominos = {
  0: [[0, 0, 0, 0]],
  I: [
    ['A', 'A', 'A', 'A'],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    ['B', 0, 0, 0],
    ['B', 'B', 'B', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  L: [
    [0, 0, 'P', 0],
    ['P', 'P', 'P', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [0, 'Y', 'Y', 0],
    [0, 'Y', 'Y', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // Define other shapes ( T, S, Z, L) similarly
}

export const randomTetromino = (): Tetromino => {
  const tetrominos = 'IJLO'
  const randIndex = Math.floor(Math.random() * tetrominos.length)
  return TETROMINOS[tetrominos[randIndex]]
}
