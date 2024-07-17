import { atom } from 'jotai'
import { Board, TetrominoConfig } from './types'
import { createEmptyBoard } from './helpers'

export const boardAtom = atom<Board>(createEmptyBoard())
export const currentTetrominoAtom = atom<TetrominoConfig | undefined>(undefined)
export const prevTetrominoAtom = atom<TetrominoConfig | undefined>(undefined)
export const nextTetrominoAtom = atom<TetrominoConfig | undefined>(undefined)
export const linesClearedAtom = atom<number>(0)
export const tetrisesCountAtom = atom<number>(0)
export const scoreAtom = atom<number>(0)
export const levelAtom = atom<number>(0)
export const showEndGamePopoverAtom = atom<boolean>(false)
export const showStartGamePopoverAtom = atom<boolean>(true)
