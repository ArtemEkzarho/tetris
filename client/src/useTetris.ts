import { useCallback, useEffect } from 'react'
import { randomTetromino } from './tetrominos'
import { BOARD_HEIGHT, BOARD_WIDTH, createEmptyBoard, checkCollision } from './consts'
import { useMovements } from './useMovements'
import { useAtom, useAtomValue } from 'jotai'
import { boardAtom, currentTetrominoAtom, prevTetrominoAtom, dropTimeAtom } from './atoms'

export const useTetris = () => {
  const [board, setBoard] = useAtom(boardAtom)
  const [currentTetromino, setCurrentTetromino] = useAtom(currentTetrominoAtom)
  const [dropTime, setDropTime] = useAtom(dropTimeAtom)
  const prevTetromino = useAtomValue(prevTetrominoAtom)
  const { moveTo } = useMovements()

  const resetBoard = useCallback(
    ({ startGame, endGame }: { startGame?: boolean; endGame?: boolean }) => {
      const newBoard = createEmptyBoard()
      setBoard(newBoard)

      if (startGame) {
        setCurrentTetromino({ tetromino: randomTetromino(), pos: { x: BOARD_WIDTH / 2 - 2, y: 0 } })
        setDropTime(500)
      }

      if (endGame) {
        setCurrentTetromino(undefined)
        setDropTime(undefined)
      }
    },
    [setBoard, setCurrentTetromino, setDropTime]
  )

  // const _checkForCompleteLines = () => {
  //   console.log()
  // }

  useEffect(() => {
    if (currentTetromino) {
      setBoard((prev) => {
        const newBoard = prev.map((row) => [...row])

        for (let y = 0; y < BOARD_HEIGHT; y++) {
          for (let x = 0; x < BOARD_WIDTH; x++) {
            if (
              prev[y][x] === 'A' ||
              prev[y][x] === 'B' ||
              prev[y][x] === 'P' ||
              prev[y][x] === 'Y'
            ) {
              newBoard[y][x] = 0
            }
          }
        }

        const { bottom, sides } = checkCollision(currentTetromino, newBoard)

        if (bottom && prevTetromino) {
          prevTetromino.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 0) {
                newBoard[y + prevTetromino.pos.y][x + prevTetromino.pos.x] = 'T'
              }
            })
          })

          setCurrentTetromino({
            tetromino: randomTetromino(),
            pos: { x: BOARD_WIDTH / 2 - 2, y: 0 },
          })

          return newBoard
        }

        if (sides) {
          setCurrentTetromino(prevTetromino)
          return prev
        }

        currentTetromino.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              newBoard[y + currentTetromino.pos.y][x + currentTetromino.pos.x] = value
            }
          })
        })

        return newBoard
      })
    }
  }, [currentTetromino, prevTetromino, setBoard, setCurrentTetromino])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (dropTime) {
      interval = setInterval(() => {
        moveTo({ y: 1 })
      }, dropTime)
    }

    return () => clearInterval(interval)
  }, [dropTime, moveTo])

  return { board, resetBoard, moveTo }
}
