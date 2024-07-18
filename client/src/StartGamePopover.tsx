import { Stack, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { showStartGamePopoverAtom } from './atoms'
import { MenuButton } from './MenuButton'
import { ArrowBack, ArrowDownward, ArrowForward } from '@mui/icons-material'
import { ControlButton } from './ControlButton'

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
      <MenuButton
        onClick={() => {
          resetBoard({ startGame: true })
          setShowStartGamePopover(false)
        }}
      >
        Start Game
      </MenuButton>
      <Typography>Controls </Typography>
      <Stack direction="row" alignItems="center" spacing={1} height="36px">
        <Typography>Move </Typography>
        <ControlButton>
          <ArrowBack />
        </ControlButton>
        <ControlButton>
          <ArrowForward />
        </ControlButton>
        <ControlButton>
          <ArrowDownward />
        </ControlButton>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1} height="36px">
        <Typography>Rotate </Typography>
        <ControlButton size={36}>Z</ControlButton>
        <ControlButton size={36}>X</ControlButton>
      </Stack>
    </Stack>
  ) : null
}
