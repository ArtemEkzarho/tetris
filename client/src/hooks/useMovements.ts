import { useCallback } from 'react'
import { useSetAtom } from 'jotai'
import { currentTetrominoAtom, prevTetrominoAtom } from '../helpers/atoms'
// import { BOARD_HEIGHT, BOARD_WIDTH } from '../helpers'

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

const getPrevRotation = (rotation: number) => {
  if (rotation === 0) return 3
  return rotation - 1
}

export const useMovements = () => {
  const setCurrentTetromino = useSetAtom(currentTetrominoAtom)
  const setPrevTetromino = useSetAtom(prevTetrominoAtom)
  // const board = useAtomValue(boardAtom)

  const moveTo = useCallback(
    ({ x, y }: { x?: number; y?: number }) => {
      setCurrentTetromino((prev) => {
        setPrevTetromino(prev)
        return prev
          ? {
              ...prev,
              pos: { x: prev.pos.x + (x ?? 0), y: prev.pos.y + (y ?? 0) },
              direction: getDirection(x, y),
            }
          : undefined
      })
    },
    [setCurrentTetromino, setPrevTetromino]
  )

  const rotate = useCallback(
    (turn: 'left' | 'right') => {
      setCurrentTetromino((prev) => {
        setPrevTetromino(prev)
        return prev
          ? {
              ...prev,
              rotation:
                turn === 'left' ? getPrevRotation(prev.rotation) : getNextRotation(prev.rotation),
              direction: 'rotation',
            }
          : undefined
      })
    },
    [setCurrentTetromino, setPrevTetromino]
  )

  const fastDrop = useCallback(() => {
    // setCurrentTetromino((prev) => {
    //   if (!prev) return undefined
    //   const tetromino = prev.tetromino[prev.rotation]
    //   const pos = prev.pos
    //   for (let y = 0; y < tetromino.length; y++) {
    //     for (let x = 0; x < tetromino[y].length; x++) {
    //       // Only check occupied cells in the tetromino (i.e., cells that are not 'EMPTY_CELL')
    //       if (tetromino[y][x] !== 'EMPTY_CELL') {
    //         const newX = x + pos.x
    //         const newY = y + pos.y
    //         console.log(newX, newY)
    //         console.log(board[newX][newY])
    //       }
    //     }
    //   }
    //   setPrevTetromino(prev)
    //   return {
    //     ...prev,
    //     direction: 'down',
    //   }
    // })
  }, [])

  return { moveTo, rotate, fastDrop }
}
