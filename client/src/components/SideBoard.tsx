import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { scoreAtom, showEndGamePopoverAtom, showStartGamePopoverAtom } from '../helpers/atoms'
import { ArrowDownward, ArrowForward, ArrowBack, Close } from '@mui/icons-material'
import { ComponentType } from 'react'

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

  const restartHandler = () => {
    setShowEndGamePopover(false)
    setShowStartGamePopover(false)
    setScore(0)
    resetBoard({ startGame: true })
  }

  const endGameHandler = () => {
    resetBoard({ endGame: true })
    setShowStartGamePopover(true)
    setShowEndGamePopover(false)
    setScore(0)
  }

  return (
    <Stack height="100%" sx={{ position: 'relative' }}>
      <Stack flex={1} p={2}>
        <Typography textAlign="center">Score: {score}</Typography>
      </Stack>
      <Stack spacing={1} p={2}>
        <Button variant="outlined" onClick={restartHandler}>
          Restart
        </Button>
        <Button variant="outlined" onClick={endGameHandler}>
          End game
        </Button>
      </Stack>
      <Stack p={1} spacing={1}>
        <Typography variant="body1" textAlign="center">
          Controls
        </Typography>
        <ControlRow title="Rotate" Icon={Close} />
        <ControlRow title="Drop" Icon={ArrowDownward} />
        <ControlRow title="Left" Icon={ArrowBack} />
        <ControlRow title="Right" Icon={ArrowForward} />
      </Stack>
    </Stack>
  )
}

type ControlRowProps = { Icon: ComponentType; title: string }

const ControlRow = ({ Icon, title }: ControlRowProps) => (
  <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
    <Typography variant="body2" textAlign="center">
      {title}
    </Typography>
    <IconButton size="small" color="primary" sx={{ width: '24px', height: '24px' }}>
      <Icon />
    </IconButton>
  </Stack>
)
