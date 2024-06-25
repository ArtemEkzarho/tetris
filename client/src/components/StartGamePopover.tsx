import { Button, Stack } from '@mui/material'
import { useState } from 'react'

type Props = {
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const StartGamePopover = ({ resetBoard }: Props) => {
  const [showPopover, setShowPopover] = useState(true)

  return showPopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'absolute', background: 'white', opacity: 0.8 }}
    >
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
        Start Game
      </Button>
    </Stack>
  ) : null
}
