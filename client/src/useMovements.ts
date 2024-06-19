import { useCallback } from 'react'
import { useSetAtom } from 'jotai'
import { currentTetrominoAtom, prevTetrominoAtom } from './atoms'

export const useMovements = () => {
  const setCurrentTetromino = useSetAtom(currentTetrominoAtom)
  const setPrevTetromino = useSetAtom(prevTetrominoAtom)

  const moveTo = useCallback(
    ({ x, y }: { x?: number; y?: number }) => {
      setCurrentTetromino((prev) => {
        setPrevTetromino(prev)
        return prev
          ? {
              ...prev!,
              pos: { x: prev.pos.x + (x ?? 0), y: prev.pos.y + (y ?? 0) },
            }
          : undefined
      })
    },
    [setCurrentTetromino, setPrevTetromino]
  )

  return { moveTo }
}
