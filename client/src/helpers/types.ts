export type Cell = FallingTetrominoCell | FixedTetromino | EmptyCell
export type EmptyCell = 'EMPTY_CELL'
export type FallingTetrominoCell = 'I' | 'J' | 'L' | 'O' | 'T' | 'S' | 'Z'
export type FixedTetromino =
  | 'FIXED_I'
  | 'FIXED_J'
  | 'FIXED_L'
  | 'FIXED_O'
  | 'FIXED_T'
  | 'FIXED_S'
  | 'FIXED_Z'
export type Board = Cell[][]
export type Position = { x: number; y: number }
export type Collision = {
  bottom: boolean
  boundary: boolean
  otherElements: boolean
}

export type Tetromino = (FallingTetrominoCell | EmptyCell)[][]

export interface Tetrominos {
  [key: string]: Tetromino[]
}

export type TetrominoConfig = {
  tetromino: Tetromino[]
  letter: FallingTetrominoCell
  pos: Position
  direction: 'left' | 'right' | 'down' | 'rotation'
  rotation: number
}
