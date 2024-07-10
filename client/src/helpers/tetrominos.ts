import { TETRO_LETTERS } from './consts'
import { FallingTetrominoCell, Tetrominos } from './types'

export const TETROMINOS: Tetrominos = {
  I: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['I', 'I', 'I', 'I'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['I', 'I', 'I', 'I'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'I', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
  J: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'J', 'J', 'J'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'J'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'J', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'J', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'J', 'J', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'J', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'J', 'J', 'J'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'J', 'J'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'J', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'J', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
  L: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'L', 'L', 'L'],
      ['EMPTY_CELL', 'L', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'L', 'L'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'L'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'L'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'L'],
      ['EMPTY_CELL', 'L', 'L', 'L'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'L', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'L', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'L', 'L', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
  O: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'O', 'O', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
  T: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'T', 'T', 'T'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'T'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'T', 'T', 'T'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'T', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'T', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
  S: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'S', 'S'],
      ['EMPTY_CELL', 'S', 'S', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'S', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'S', 'S'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'S'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'S', 'S'],
      ['EMPTY_CELL', 'S', 'S', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'S', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'S', 'S', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'S', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
  Z: [
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'Z', 'Z', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'Z', 'Z'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'Z'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'Z', 'Z'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'Z', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'Z', 'Z', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'Z', 'Z'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
    [
      ['EMPTY_CELL', 'EMPTY_CELL', 'Z', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'Z', 'Z', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'Z', 'EMPTY_CELL', 'EMPTY_CELL'],
      ['EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL', 'EMPTY_CELL'],
    ],
  ],
}

export const randomTetromino = () => {
  const randIndex = Math.floor(Math.random() * TETRO_LETTERS.length)
  return {
    tetromino: TETROMINOS[TETRO_LETTERS[randIndex]],
    letter: TETRO_LETTERS[randIndex] as FallingTetrominoCell,
  }
}
