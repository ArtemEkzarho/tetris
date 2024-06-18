export type Tetromino = (string | number)[][]

interface Tetrominos {
  [key: string]: Tetromino
}

export const TETROMINOS: Tetrominos = {
  0: [[0, 0, 0, 0]],
  I: [
    ['I', 'I', 'I', 'I'],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    ['I', 0, 0, 0],
    ['I', 'I', 'I', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  L: [
    [0, 0, 'I', 0],
    ['I', 'I', 'I', 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [0, 'I', 'I', 0],
    [0, 'I', 'I', 0],
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
