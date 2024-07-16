import { useCallback, useEffect } from 'react'
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  createEmptyBoard,
  checkCollision,
  canPlaceTetromino,
  getNewTetromino,
  checkForCompleteLines,
  countScore,
  getDropTime,
} from '../helpers'
import { useMovements } from './useMovements'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  boardAtom,
  currentTetrominoAtom,
  prevTetrominoAtom,
  dropTimeAtom,
  showEndGamePopoverAtom,
  scoreAtom,
  clearedLineCountAtom,
} from '../helpers/atoms'

export const useTetris = () => {
  const [board, setBoard] = useAtom(boardAtom)
  const [currentTetromino, setCurrentTetromino] = useAtom(currentTetrominoAtom)
  const [dropTime, setDropTime] = useAtom(dropTimeAtom)
  const setShowEndGamePopover = useSetAtom(showEndGamePopoverAtom)
  const prevTetromino = useAtomValue(prevTetrominoAtom)
  const setScore = useSetAtom(scoreAtom)
  const setClearedLineCount = useSetAtom(clearedLineCountAtom)
  const { moveTo } = useMovements()

  const resetBoard = useCallback(
    ({ startGame, endGame }: { startGame?: boolean; endGame?: boolean }) => {
      const newBoard = createEmptyBoard()
      setBoard(newBoard)

      if (startGame) {
        setCurrentTetromino(getNewTetromino())
        setDropTime(800)
      }

      if (endGame) {
        setCurrentTetromino(undefined)
        setDropTime(undefined)
        setClearedLineCount(0)
      }
    },
    [setBoard, setClearedLineCount, setCurrentTetromino, setDropTime]
  )

  const updateScore = useCallback(
    (linesCleared: number) => {
      const newScore = countScore(linesCleared, 1)
      setScore((prev) => prev + newScore)
    },
    [setScore]
  )

  const updateLevel = useCallback(
    (linesCleared: number) => {
      setClearedLineCount((prev) => {
        const newLinesCount = prev + linesCleared
        const newDropTime = getDropTime(newLinesCount)
        setDropTime(newDropTime)

        return prev + linesCleared
      })
    },
    [setClearedLineCount, setDropTime]
  )

  useEffect(() => {
    if (currentTetromino) {
      setBoard((prev) => {
        const newBoard = prev.map((row) => [...row])

        for (let y = 0; y < BOARD_HEIGHT; y++) {
          for (let x = 0; x < BOARD_WIDTH; x++) {
            if (
              prev[y][x] === 'I' ||
              prev[y][x] === 'J' ||
              prev[y][x] === 'L' ||
              prev[y][x] === 'O' ||
              prev[y][x] === 'T' ||
              prev[y][x] === 'S' ||
              prev[y][x] === 'Z'
            ) {
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
          updateScore(linesCleared)
          updateLevel(linesCleared)

          const newTetromino = getNewTetromino()

          if (canPlaceTetromino(newTetromino, clearedBoard)) {
            setCurrentTetromino(newTetromino)

            return clearedBoard
          } else {
            setShowEndGamePopover(true)
            setCurrentTetromino(undefined)
            setDropTime(undefined)
            setClearedLineCount(0)
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
    prevTetromino,
    setBoard,
    setClearedLineCount,
    setCurrentTetromino,
    setDropTime,
    setShowEndGamePopover,
    updateLevel,
    updateScore,
  ])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (dropTime) {
      interval = setInterval(() => {
        moveTo({ y: 1 })
      }, dropTime)
    }

    return () => clearInterval(interval)
  }, [dropTime, moveTo])

  return { board, resetBoard }
}
