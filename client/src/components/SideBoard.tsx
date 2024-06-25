import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { scoreAtom, showEndGamePopoverAtom, showStartGamePopoverAtom } from '../helpers/atoms'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

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

  return (
    <Stack height="100%" width="25vh" sx={{ position: 'relative' }}>
      <Stack flex={1} p={2}>
        <Typography variant="h6" textAlign="center">
          Score: {score}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" p={2}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => {
            setShowEndGamePopover(false)
            setShowStartGamePopover(false)
            resetBoard({ startGame: true })
          }}
        >
          Restart
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => {
            resetBoard({ endGame: true })
            setShowStartGamePopover(true)
          }}
        >
          End game
        </Button>
      </Stack>
      <Stack spacing={1} p={2}>
        <Typography variant="h6" textAlign="center">
          Controls
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" textAlign="center">
            Rotate
          </Typography>
          <IconButton size="small" color="primary">
            <ArrowUpwardIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" textAlign="center">
            Fast drop
          </Typography>
          <IconButton size="small" color="primary">
            <ArrowDownwardIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" textAlign="center">
            Move
          </Typography>
          <Stack direction="row">
            <IconButton size="small" color="primary">
              <ArrowBackIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
