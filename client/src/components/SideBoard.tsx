import { Stack, Typography } from '@mui/material'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  clearedLineCountAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  showStartGamePopoverAtom,
} from '../helpers/atoms'
import { MenuButton } from './common/MenuButton'
import { getLevel } from '../helpers'

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
  const [clearedLineCount, setClearedLineCount] = useAtom(clearedLineCountAtom)

  const restartHandler = () => {
    setShowEndGamePopover(false)
    setShowStartGamePopover(false)
    setScore(0)
    setClearedLineCount(0)
    resetBoard({ startGame: true })
  }

  const endGameHandler = () => {
    resetBoard({ endGame: true })
    setShowStartGamePopover(true)
    setShowEndGamePopover(false)
    setClearedLineCount(0)
    setScore(0)
  }

  return (
    <Stack height="100%" sx={{ position: 'relative' }}>
      <Stack flex={1} pt={2} spacing={1}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Typography textAlign="center">Score: </Typography>
          <Typography>{score}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Typography textAlign="center">Level: </Typography>
          <Typography>{getLevel(clearedLineCount)}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Typography textAlign="center">Cleared line: </Typography>
          <Typography>{clearedLineCount}</Typography>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <MenuButton onClick={restartHandler}>Restart</MenuButton>
        <MenuButton onClick={endGameHandler}>End game</MenuButton>
      </Stack>
    </Stack>
  )
}
