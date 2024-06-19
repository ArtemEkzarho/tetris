import { atom } from 'jotai'
import { Tetromino } from './tetrominos'
import { Board, Position } from './types'
import { createEmptyBoard } from './consts'

export const currentTetrominoAtom = atom<
  | {
      tetromino: Tetromino
      pos: Position
    }
  | undefined
>(undefined)

export const prevTetrominoAtom = atom<
  | {
      tetromino: Tetromino
      pos: Position
    }
  | undefined
>(undefined)

export const boardAtom = atom<Board>(createEmptyBoard())
export const dropTimeAtom = atom<number | undefined>(undefined)
