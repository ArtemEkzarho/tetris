import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { scoreAtom, showEndGamePopoverAtom, showStartGamePopoverAtom } from '../helpers/atoms'
import { ArrowDownward, ArrowForward, ArrowBack, Close } from '@mui/icons-material'

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
  const setScore = useSetAtom(scoreAtom)

  return (
    <Stack height="100%" sx={{ position: 'relative' }}>
      <Stack flex={1} p={2}>
        <Typography variant="h6" textAlign="center">
          Score: {score}
        </Typography>
      </Stack>
      <Stack spacing={1} p={2}>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          sx={{ textTransform: 'none' }}
          onClick={() => {
            setShowEndGamePopover(false)
            setShowStartGamePopover(false)
            setScore(0)
            resetBoard({ startGame: true })
          }}
        >
          Restart
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none' }}
          color="primary"
          onClick={() => {
            resetBoard({ endGame: true })
            setShowStartGamePopover(true)
            setShowEndGamePopover(false)
            setScore(0)
          }}
        >
          End game
        </Button>
      </Stack>
      <Stack p={1} spacing={1}>
        <Typography variant="body1" textAlign="center">
          Controls
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" textAlign="center">
            Rotate
          </Typography>
          <IconButton size="small" color="primary" sx={{ width: '24px', height: '24px' }}>
            <Close />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" textAlign="center">
            Drop
          </Typography>
          <IconButton size="small" color="primary" sx={{ width: '24px', height: '24px' }}>
            <ArrowDownward />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" textAlign="center">
            Left
          </Typography>
          <IconButton size="small" color="primary" sx={{ width: '24px', height: '24px' }}>
            <ArrowBack />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" textAlign="center">
            Right
          </Typography>
          <IconButton size="small" color="primary" sx={{ width: '24px', height: '24px' }}>
            <ArrowForward />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
