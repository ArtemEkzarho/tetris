import CssBaseline from '@mui/material/CssBaseline'
import { Box, Divider, Stack, Typography } from '@mui/material'
import './styles.css'
import { useTetris } from './useTetris'
import { TetroCell } from './TetroCell'
import { useMovements } from './useMovements'
import { useEffect } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  levelAtom,
  linesClearedAtom,
  nextTetrominoAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  showStartGamePopoverAtom,
  tetrisesCountAtom,
} from './atoms'
import { ControlButton } from './ControlButton'
import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
  RotateLeft,
  RotateRight,
} from '@mui/icons-material'
import { StartGamePopover } from './StartGamePopover'
import { EndGamePopover } from './EndGamePopover'
import { MenuButton } from './MenuButton'

export const App = () => {
  const { board, resetBoard } = useTetris()
  const { moveTo, rotate } = useMovements()
  const [linesCleared, setLinesCleared] = useAtom(linesClearedAtom)
  const [score, setScore] = useAtom(scoreAtom)
  const [level, setLevel] = useAtom(levelAtom)
  const [tetrisesCount, setTetrisesCount] = useAtom(tetrisesCountAtom)
  const nextTetromino = useAtomValue(nextTetrominoAtom)
  const setShowEndGamePopover = useSetAtom(showEndGamePopoverAtom)
  const setShowStartGamePopover = useSetAtom(showStartGamePopoverAtom)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyZ':
          rotate('left')
          break
        case 'KeyX':
          rotate('right')
          break
        case 'ArrowDown':
          moveTo({ y: 1 })
          break
        case 'ArrowLeft':
          moveTo({ x: -1 })
          break
        case 'ArrowRight':
          moveTo({ x: 1 })
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [moveTo, rotate])

  return (
    <>
      <CssBaseline />
      <Stack className="main-container" height="100vh" width="50vh">
        <Stack height="10%">
          <Stack alignItems="center" justifyContent="center" className="azure-board" height="100%">
            <Stack direction="row" spacing={1}>
              <Typography>SCORE</Typography>
              <Typography>{score}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography>Tetrises</Typography>
              <Typography>{tetrisesCount} </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" height="90%">
          <Stack width="75%" className="azure-board" style={{ position: 'relative' }}>
            {board.map((row, y) => (
              <Stack flex={1} direction="row" key={y} justifyContent="space-between">
                {row.map((cell, x) => (
                  <Box key={x} flex={1} className="tetro-cell-wrap">
                    {cell !== 'EMPTY_CELL' ? <TetroCell cell={cell} /> : null}
                  </Box>
                ))}
              </Stack>
            ))}
            <StartGamePopover resetBoard={resetBoard} />
            <EndGamePopover resetBoard={resetBoard} />
          </Stack>
          <Divider orientation="vertical" />
          <Stack width="25%" height="100%" className="azure-board" alignItems="center" spacing={1}>
            <Typography>NEXT</Typography>
            <Stack alignItems="center" justifyContent="center" width="100%" height="15%">
              {nextTetromino &&
                nextTetromino.tetromino[nextTetromino.rotation].map((row, y) => (
                  <Stack
                    flex={1}
                    direction="row"
                    key={y}
                    justifyContent="space-between"
                    width="93%"
                  >
                    {row.map((cell, x) => (
                      <Box key={x} flex={1} className="tetro-cell-wrap">
                        {cell !== 'EMPTY_CELL' ? <TetroCell cell={cell} /> : null}
                      </Box>
                    ))}
                  </Stack>
                ))}
            </Stack>
            <Typography>LINES</Typography>
            <Typography>{linesCleared}</Typography>
            <Typography>LV</Typography>
            <Typography>{level}</Typography>
            <MenuButton
              onClick={() => {
                resetBoard({ startGame: true })
                setShowEndGamePopover(false)
                setShowStartGamePopover(false)
                setLinesCleared(0)
                setTetrisesCount(0)
                setLevel(0)
                setScore(0)
              }}
            >
              Reset Game
            </MenuButton>
            <MenuButton
              onClick={() => {
                resetBoard({ endGame: true })
                setShowEndGamePopover(false)
                setShowStartGamePopover(true)
                setLinesCleared(0)
                setTetrisesCount(0)
                setLevel(0)
                setScore(0)
              }}
            >
              End Game
            </MenuButton>
          </Stack>
        </Stack>
        <Stack direction="row" height="20%">
          <Stack direction="row" height="100%" width="100%" p="5%" spacing="3%">
            <Stack width="50%" spacing="3%">
              <Stack direction="row" justifyContent="center" flex={1} px="30%">
                <ControlButton onClick={() => moveTo({ y: -1 })}>
                  <ArrowUpward />
                </ControlButton>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing="25%" flex={1}>
                <ControlButton onClick={() => moveTo({ x: -1 })}>
                  <ArrowBack />
                </ControlButton>
                <ControlButton onClick={() => moveTo({ x: 1 })}>
                  <ArrowForward />
                </ControlButton>
              </Stack>
              <Stack direction="row" justifyContent="center" flex={1} px="30%">
                <ControlButton onClick={() => moveTo({ y: 1 })}>
                  <ArrowDownward />
                </ControlButton>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              width="50%"
              spacing="10%"
            >
              <ControlButton onClick={() => rotate('left')}>
                <RotateRight />
              </ControlButton>
              <ControlButton onClick={() => rotate('right')}>
                <RotateLeft />
              </ControlButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
