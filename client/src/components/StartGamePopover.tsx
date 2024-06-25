import { Button, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { showStartGamePopoverAtom } from '../helpers/atoms'

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
  const [showPopover, setShowPopover] = useAtom(showStartGamePopoverAtom)

  return showPopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'absolute', background: 'rgb(255 255 255 / 80%)' }}
    >
      <Button
        size="small"
        onClick={() => {
          resetBoard({ startGame: true })
          setShowPopover(false)
        }}
        variant="contained"
        fullWidth
        sx={{ width: 200 }}
      >
        Start Game
      </Button>
    </Stack>
  ) : null
}
