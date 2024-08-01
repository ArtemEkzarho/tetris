import { Stack, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { showStartGamePopoverAtom } from '../common/atoms'

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
  const [showStartGamePopover, setShowStartGamePopover] = useAtom(showStartGamePopoverAtom)

  return showStartGamePopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      sx={{ position: 'absolute' }}
      spacing={2}
    >
      <button
        className="menu-btn"
        onClick={() => {
          resetBoard({ startGame: true })
          setShowStartGamePopover(false)
        }}
      >
        <Typography variant="h1">START GAME</Typography>
      </button>
      <Typography variant="h1">CONTROLS</Typography>
      <Stack direction="row" alignItems="center" spacing={1} height="36px">
        <Typography variant="h1">MOVE </Typography>
        <button className="control-btn">
          <Typography variant="h1">←</Typography>
        </button>
        <button className="control-btn">
          <Typography variant="h1">→</Typography>
        </button>
        <button className="control-btn">
          <Typography variant="h1">↓</Typography>
        </button>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} height="36px">
        <Typography variant="h1">ROTATE </Typography>
        <button className="control-btn">
          <Typography variant="h1">Z</Typography>
        </button>
        <button className="control-btn">
          <Typography variant="h1">X</Typography>
        </button>
      </Stack>
    </Stack>
  ) : null
}
