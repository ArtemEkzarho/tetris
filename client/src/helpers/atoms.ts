import { atom } from 'jotai'
import { Board, TetrominoConfig } from './types'
import { createEmptyBoard } from './index'

export const currentTetrominoAtom = atom<TetrominoConfig | undefined>(undefined)
export const prevTetrominoAtom = atom<TetrominoConfig | undefined>(undefined)
export const boardAtom = atom<Board>(createEmptyBoard())
export const dropTimeAtom = atom<number | undefined>(undefined)
export const showEndGamePopoverAtom = atom<boolean>(false)
export const showStartGamePopoverAtom = atom<boolean>(true)
export const scoreAtom = atom<number>(0)
export const clearedLineCountAtom = atom<number>(0)
