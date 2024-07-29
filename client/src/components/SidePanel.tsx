import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import { GitHub } from '@mui/icons-material'

import {
  levelAtom,
  linesClearedAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  showLeaderBoardAtom,
  showStartGamePopoverAtom,
  tetrisesCountAtom,
} from '../common/atoms'

type Props = {
  resetBoard: ({ startGame, endGame }: { startGame?: boolean; endGame?: boolean }) => void
}
export const SidePanel = ({ resetBoard }: Props) => {
  const [linesCleared, setLinesCleared] = useAtom(linesClearedAtom)
  const [level, setLevel] = useAtom(levelAtom)
  const setShowEndGamePopover = useSetAtom(showEndGamePopoverAtom)
  const setShowStartGamePopover = useSetAtom(showStartGamePopoverAtom)
  const setTetrisesCount = useSetAtom(tetrisesCountAtom)
  const setScore = useSetAtom(scoreAtom)
  const setShowLeaderBoard = useSetAtom(showLeaderBoardAtom)

  return (
    <Stack width="15%" height="100%" className="azure-board" alignItems="center" spacing={1}>
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
      <Tooltip title="GitHub repository">
        <IconButton
          size="small"
          target="_blank"
          href="https://github.com/ArtemEkzarho/calculator-expressts-reactts-vite"
        >
          <GitHub color="info" />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}
