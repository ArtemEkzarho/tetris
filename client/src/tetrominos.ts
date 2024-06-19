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
    [0, 'O', 'O', 0],
    [0, 'O', 'O', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  T: [
    ['H', 'H', 'H', 0],
    [0, 'H', 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  S: [
    [0, 'G', 'G', 0],
    ['G', 'G', 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  Z: [
    ['R', 'R', 0, 0],
    [0, 'R', 'R', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

export const randomTetromino = (): Tetromino => {
  const tetrominos = 'IJLOTSZ'
  const randIndex = Math.floor(Math.random() * tetrominos.length)
  return TETROMINOS[tetrominos[randIndex]]
}
