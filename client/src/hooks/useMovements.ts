import { useCallback } from 'react'
import { useSetAtom } from 'jotai'
import { currentTetrominoAtom, prevTetrominoAtom } from '../helpers/atoms'

const getDirection = (x?: number, y?: number) => {
  if (x === 1) return 'right'
  if (x === -1) return 'left'
  if (y === 1) return 'down'

  return 'down'
}

const getNextRotation = (rotation: number) => {
  if (rotation === 3) return 0

  return rotation + 1
}

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
              direction: getDirection(x, y),
            }
          : undefined
      })
    },
    [setCurrentTetromino, setPrevTetromino]
  )

  const rotate = useCallback(() => {
    setCurrentTetromino((prev) => {
      setPrevTetromino(prev)
      return prev
        ? {
            ...prev,
            rotation: getNextRotation(prev.rotation),
            direction: 'rotation',
          }
        : undefined
    })
  }, [setCurrentTetromino, setPrevTetromino])

  return { moveTo, rotate }
}
