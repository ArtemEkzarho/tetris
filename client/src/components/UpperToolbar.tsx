import { Button, Stack } from '@mui/material'

type Props = {
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const UpperToolbar = ({ resetBoard }: Props) => {
  return (
    <Stack direction="row" spacing={2} pb={2}>
      <Button
        size="small"
        onClick={() => resetBoard({ startGame: true })}
        variant="outlined"
        fullWidth
      >
        Start Game
      </Button>
      <Button
        size="small"
        onClick={() => resetBoard({ endGame: true })}
        variant="outlined"
        fullWidth
      >
        End Game
      </Button>
    </Stack>
  )
}
