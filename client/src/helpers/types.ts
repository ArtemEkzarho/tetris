export type Cell = FallingTetrominoCell | FixedTetromino | EmptyCell
export type EmptyCell = 0
export type FallingTetrominoCell = 'I' | 'J' | 'L' | 'O' | 'T' | 'S' | 'Z'
export type FixedTetromino = 'P'
export type Board = Cell[][]
export type Position = { x: number; y: number }
export type Collision = {
  bottom: boolean
  boundary: boolean
  otherElements: boolean
}

export type Tetromino = (FallingTetrominoCell | 0)[][]

export interface Tetrominos {
  [key: string]: Tetromino[]
}

export type TetrominoConfig = {
  tetromino: Tetromino[]
  pos: Position
  direction: 'left' | 'right' | 'down' | 'rotation'
  rotation: number
}
