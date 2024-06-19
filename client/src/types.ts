export type Cell = FallingTetrominoCell | FixedTetromino | EmptyCell
export type EmptyCell = 0
export type FallingTetrominoCell = 'A' | 'B' | 'P' | 'O' | 'H' | 'G' | 'R'
export type FixedTetromino = 'T'
export type Board = Cell[][]
export type Position = { x: number; y: number }
export type Collision = {
  bottom: boolean
  sides: boolean
  otherElements: boolean
}
