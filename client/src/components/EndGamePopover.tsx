import { Button, Stack, Typography } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { scoreAtom, showEndGamePopoverAtom } from '../helpers/atoms'

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
  const score = useAtomValue(scoreAtom)

  return showEndGamePopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'absolute', background: 'rgb(255 255 255 / 80%)' }}
      spacing={4}
    >
      <Typography variant="h4">Game Over!</Typography>
      <Typography variant="h5">Your score: {score}</Typography>
      <Button
        size="small"
        onClick={() => {
          resetBoard({ startGame: true })
          setShowEndGamePopover(false)
        }}
        variant="contained"
        fullWidth
        sx={{ width: 200 }}
      >
        Play Again
      </Button>
    </Stack>
  ) : null
}
