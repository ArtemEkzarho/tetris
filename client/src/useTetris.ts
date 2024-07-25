import { useCallback, useEffect } from 'react'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  boardAtom,
  currentTetrominoAtom,
  levelAtom,
  linesClearedAtom,
  nextTetrominoAtom,
  prevTetrominoAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  tetrisesCountAtom,
} from './atoms'
import {
  canPlaceTetromino,
  checkCollision,
  checkForCompleteLines,
  countScore,
  createEmptyBoard,
  getDropTime,
  getNewTetromino,
} from './helpers'
import { BOARD_HEIGHT, BOARD_WIDTH, LEVELS, TETRO_LETTERS } from './const'
import { FallingTetrominoCell } from './types'
import { useMovements } from './hooks'

export const useTetris = () => {
  const [board, setBoard] = useAtom(boardAtom)
  const { moveTo } = useMovements()
  const [currentTetromino, setCurrentTetromino] = useAtom(currentTetrominoAtom)
  const [nextTetromino, setNextTetromino] = useAtom(nextTetrominoAtom)
  const [linesCleared, setLinesCleared] = useAtom(linesClearedAtom)
  const setShowEndGamePopover = useSetAtom(showEndGamePopoverAtom)
  const setScore = useSetAtom(scoreAtom)
  const prevTetromino = useAtomValue(prevTetrominoAtom)
  const [level, setLevel] = useAtom(levelAtom)
  const setTetrisesCount = useSetAtom(tetrisesCountAtom)

  const placeNewTetromino = useCallback(() => {
    setTetrisesCount((prev) => prev + 1)
    setNextTetromino((prev) => {
      if (prev) {
        setCurrentTetromino(prev)
      } else {
        setCurrentTetromino(getNewTetromino())
      }

      return getNewTetromino()
    })
  }, [setCurrentTetromino, setNextTetromino, setTetrisesCount])

  const resetBoard = useCallback(
    ({ startGame, endGame }: { startGame?: boolean; endGame?: boolean }) => {
      const newBoard = createEmptyBoard()
      setBoard(newBoard)

      if (startGame) {
        placeNewTetromino()
      }

      if (endGame) {
        setCurrentTetromino(undefined)
      }
    },
    [placeNewTetromino, setBoard, setCurrentTetromino]
  )

  useEffect(() => {
    let interval: NodeJS.Timeout
    const dropTime = getDropTime(level)
    if (dropTime) {
      interval = setInterval(() => {
        moveTo({ y: 1 })
      }, dropTime)
    }

    return () => clearInterval(interval)
  }, [level, moveTo])

  useEffect(() => {
    if (linesCleared) {
      const currentLevel = Object.keys(LEVELS)
        .reverse()
        .find((key) => linesCleared >= LEVELS[Number(key)])
      if (currentLevel !== undefined) {
        setLevel(parseInt(currentLevel))
      }
    }
  }, [linesCleared, setLevel])

  useEffect(() => {
    if (currentTetromino) {
      setBoard((prev) => {
        const newBoard = prev.map((row) => [...row])

        for (let y = 0; y < BOARD_HEIGHT; y++) {
          for (let x = 0; x < BOARD_WIDTH; x++) {
            if (TETRO_LETTERS.includes(prev[y][x] as FallingTetrominoCell)) {
              newBoard[y][x] = 'EMPTY_CELL'
            }
          }
        }

        const { bottom, boundary, otherElements } = checkCollision(currentTetromino, newBoard)

        if (
          boundary ||
          (otherElements && currentTetromino.direction !== 'down') ||
          (otherElements && currentTetromino.direction === 'rotation')
        ) {
          setCurrentTetromino(prevTetromino)
          return prev
        }

        //fix tetromino
        if ((bottom || otherElements) && prevTetromino) {
          prevTetromino.tetromino[prevTetromino.rotation].forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 'EMPTY_CELL') {
                newBoard[y + prevTetromino.pos.y][
                  x + prevTetromino.pos.x
                ] = `FIXED_${prevTetromino.letter}`
              }
            })
          })

          const { clearedBoard, linesCleared } = checkForCompleteLines(newBoard)
          setLinesCleared((prev) => prev + linesCleared)
          setScore((prev) => prev + countScore(linesCleared, level))

          const newTetromino = nextTetromino!

          if (canPlaceTetromino(newTetromino, clearedBoard)) {
            placeNewTetromino()

            return clearedBoard
          } else {
            setShowEndGamePopover(true)
            setCurrentTetromino(undefined)
            return clearedBoard
          }
        }

        currentTetromino.tetromino[currentTetromino.rotation].forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 'EMPTY_CELL') {
              newBoard[y + currentTetromino.pos.y][x + currentTetromino.pos.x] = value
            }
          })
        })

        return newBoard
      })
    }
  }, [
    currentTetromino,
    level,
    nextTetromino,
    placeNewTetromino,
    prevTetromino,
    setBoard,
    setCurrentTetromino,
    setLinesCleared,
    setScore,
    setShowEndGamePopover,
  ])

  return { board, resetBoard }
}
