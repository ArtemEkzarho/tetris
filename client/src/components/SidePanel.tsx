import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import { GitHub, ReplayCircleFilled, Cancel, Leaderboard } from '@mui/icons-material'

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
      <Typography variant="h1">LV</Typography>
      <Typography variant="h1">{level}</Typography>
      <Typography variant="h1">ROWS</Typography>
      <Typography variant="h1">{linesCleared}</Typography>
      <Stack spacing={1} px={1}>
        <Tooltip title="RESET GAME">
          <IconButton
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
            <ReplayCircleFilled color="info" />
          </IconButton>
        </Tooltip>
        <Tooltip title="END GAME">
          <IconButton
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
            <Cancel color="error" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LEADER BOARD">
          <IconButton onClick={() => setShowLeaderBoard(true)}>
            <Leaderboard color="warning" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Tooltip title="GitHub repository">
        <IconButton
          size="small"
          target="_blank"
          href="https://github.com/ArtemEkzarho/tetris-reactts"
        >
          <GitHub color="info" />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}
