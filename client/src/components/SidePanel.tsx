import { Box, Stack, Typography } from '@mui/material'
import { TetroCell } from './TetroCell'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  levelAtom,
  linesClearedAtom,
  nextTetrominoAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  showLeaderBoardAtom,
  showStartGamePopoverAtom,
  tetrisesCountAtom,
} from '../atoms'

type Props = {
  resetBoard: ({ startGame, endGame }: { startGame?: boolean; endGame?: boolean }) => void
}
export const SidePanel = ({ resetBoard }: Props) => {
  const nextTetromino = useAtomValue(nextTetrominoAtom)
  const [linesCleared, setLinesCleared] = useAtom(linesClearedAtom)
  const [level, setLevel] = useAtom(levelAtom)
  const setShowEndGamePopover = useSetAtom(showEndGamePopoverAtom)
  const setShowStartGamePopover = useSetAtom(showStartGamePopoverAtom)
  const setTetrisesCount = useSetAtom(tetrisesCountAtom)
  const setScore = useSetAtom(scoreAtom)
  const setShowLeaderBoard = useSetAtom(showLeaderBoardAtom)

  return (
    <Stack width="25%" height="100%" className="azure-board" alignItems="center" spacing={1}>
      <Typography>NEXT</Typography>
      <Stack alignItems="center" justifyContent="center" width="100%" height="15%">
        {nextTetromino &&
          nextTetromino.tetromino[nextTetromino.rotation].map((row, y) => (
            <Stack flex={1} direction="row" key={y} justifyContent="space-between" width="93%">
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
      <Stack spacing={1} px={1}>
        <button
          className="menu-btn"
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
        </button>
        <button
          className="menu-btn"
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
        </button>
        <button className="menu-btn" onClick={() => setShowLeaderBoard(true)}>
          Leader board
        </button>
      </Stack>
    </Stack>
  )
}
