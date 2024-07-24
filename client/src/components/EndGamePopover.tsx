import { Stack, Typography } from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import {
  levelAtom,
  linesClearedAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  tetrisesCountAtom,
} from '../atoms'

type Props = {
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const EndGamePopover = ({ resetBoard }: Props) => {
  const [showEndGamePopover, setShowEndGamePopover] = useAtom(showEndGamePopoverAtom)
  const setLinesCleared = useSetAtom(linesClearedAtom)
  const setTetrisesCount = useSetAtom(tetrisesCountAtom)
  const setLevel = useSetAtom(levelAtom)
  const [score, setScore] = useAtom(scoreAtom)

  return showEndGamePopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'absolute', background: 'rgb(0 0 0 / 73%)' }}
      spacing={4}
    >
      <Typography variant="h4">Game Over!</Typography>
      <Typography variant="h5">Your score: {score}</Typography>
      <button
        className="menu-btn"
        onClick={() => {
          resetBoard({ startGame: true })
          setShowEndGamePopover(false)
          setLinesCleared(0)
          setTetrisesCount(0)
          setLevel(0)
          setScore(0)
        }}
      >
        Play Again
      </button>
    </Stack>
  ) : null
}
