import { Stack, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { showStartGamePopoverAtom } from '../atoms'

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
        Start Game
      </button>
      <Typography>Controls </Typography>
      <Stack direction="row" alignItems="center" spacing={1} height="36px">
        <Typography>Move </Typography>
        <button className="control-btn">←</button>
        <button className="control-btn">→</button>
        <button className="control-btn">↓</button>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} height="36px">
        <Typography>Rotate </Typography>
        <button className="control-btn">Z</button>
        <button className="control-btn">X</button>
      </Stack>
    </Stack>
  ) : null
}
