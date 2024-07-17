import { Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { showStartGamePopoverAtom } from './atoms'
import { MenuButton } from './MenuButton'

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
      sx={{ position: 'absolute' }}
    >
      <MenuButton
        onClick={() => {
          resetBoard({ startGame: true })
          setShowPopover(false)
        }}
      >
        Start Game
      </MenuButton>
    </Stack>
  ) : null
}
