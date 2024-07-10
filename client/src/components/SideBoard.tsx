import { Button, Stack, Typography } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { scoreAtom, showEndGamePopoverAtom, showStartGamePopoverAtom } from '../helpers/atoms'

type Props = {
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const SideBoard = ({ resetBoard }: Props) => {
  const score = useAtomValue(scoreAtom)
  const setShowEndGamePopover = useSetAtom(showEndGamePopoverAtom)
  const setShowStartGamePopover = useSetAtom(showStartGamePopoverAtom)
  const setScore = useSetAtom(scoreAtom)

  const restartHandler = () => {
    setShowEndGamePopover(false)
    setShowStartGamePopover(false)
    setScore(0)
    resetBoard({ startGame: true })
  }

  const endGameHandler = () => {
    resetBoard({ endGame: true })
    setShowStartGamePopover(true)
    setShowEndGamePopover(false)
    setScore(0)
  }

  return (
    <Stack height="100%" sx={{ position: 'relative' }}>
      <Stack flex={1} pt={2}>
        <Typography textAlign="center">Score: {score}</Typography>
      </Stack>
      <Stack spacing={1} px={2}>
        <Button variant="outlined" onClick={restartHandler}>
          Restart
        </Button>
        <Button variant="outlined" onClick={endGameHandler}>
          End game
        </Button>
      </Stack>
    </Stack>
  )
}
