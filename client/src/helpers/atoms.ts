import { atom } from 'jotai'
import { Board, Position, Tetromino } from './types'
import { createEmptyBoard } from './index'

export const currentTetrominoAtom = atom<
  | {
      tetromino: Tetromino[]
      pos: Position
      direction: 'left' | 'right' | 'down' | 'rotation'
      rotation: number
    }
  | undefined
>(undefined)

export const prevTetrominoAtom = atom<
  | {
      tetromino: Tetromino[]
      pos: Position
      direction: 'left' | 'right' | 'down' | 'rotation'
      rotation: number
    }
  | undefined
>(undefined)

export const boardAtom = atom<Board>(createEmptyBoard())
export const dropTimeAtom = atom<number | undefined>(undefined)
