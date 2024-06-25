import { Button, Stack, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { showEndGamePopoverAtom } from '../helpers/atoms'

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
  const [showPopover, setShowPopover] = useAtom(showEndGamePopoverAtom)

  return showPopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'absolute', background: 'white', opacity: 0.8 }}
      spacing={4}
    >
      <Typography variant="h6">Game Over!</Typography>
      <Button
        size="small"
        onClick={() => {
          resetBoard({ startGame: true })
          setShowPopover(false)
        }}
        variant="outlined"
        fullWidth
        sx={{ width: 200 }}
      >
        Play Again
      </Button>
    </Stack>
  ) : null
}
