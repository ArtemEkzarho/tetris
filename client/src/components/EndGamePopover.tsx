import { Stack, Typography } from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import {
  levelAtom,
  linesClearedAtom,
  scoreAtom,
  showEndGamePopoverAtom,
  showLeaderBoardAtom,
  tetrisesCountAtom,
} from '../common/atoms'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Props = {
  resetBoard: ({
    startGame,
    endGame,
  }: {
    startGame?: boolean | undefined
    endGame?: boolean | undefined
  }) => void
}

export const EndGamePopover = ({ resetBoard }: Props) => {
  const [showEndGamePopover, setShowEndGamePopover] = useAtom(showEndGamePopoverAtom)
  const setShowLeaderBoard = useSetAtom(showLeaderBoardAtom)
  const [linesCleared, setLinesCleared] = useAtom(linesClearedAtom)
  const [tetrisesCount, setTetrisesCount] = useAtom(tetrisesCountAtom)
  const setLevel = useSetAtom(levelAtom)
  const [score, setScore] = useAtom(scoreAtom)
  const [scoreName, setScoreName] = useState('')
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () =>
      fetch('/api/leaders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: scoreName,
          score: score,
          tetrises: tetrisesCount,
          lines: linesCleared,
        }),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaders'] })
      setScoreName('')
      setShowLeaderBoard(true)
    },
  })

  return showEndGamePopover ? (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      sx={{ position: 'absolute', background: 'rgb(0 0 0 / 73%)' }}
      spacing={4}
      p={1}
    >
      <Typography variant="h1" align="center">
        GAME OVER!
      </Typography>
      <Typography variant="h1" align="center">
        YOUR SCORE: {score}
      </Typography>
      <Stack spacing={1}>
        <input
          name="name"
          placeholder="Enter your name"
          value={scoreName}
          onChange={(e) => setScoreName(e.target.value)}
        />
      </Stack>
      <Stack direction="row" spacing={1} justifyContent="center">
        <button
          className="menu-btn"
          onClick={() => {
            resetBoard({ startGame: true })
            setShowEndGamePopover(false)
            setLinesCleared(0)
            setTetrisesCount(0)
            setLevel(0)
            setScore(0)
          }}
        >
          <Typography variant="h1">PLAY AGAIN</Typography>
        </button>
        <button className="menu-btn" onClick={() => mutate()}>
          <Typography variant="h1">SAVE SCORE</Typography>
        </button>
        <button className="menu-btn" onClick={() => setShowLeaderBoard(true)}>
          <Typography variant="h1">LEADER BOARD</Typography>
        </button>
      </Stack>
    </Stack>
  ) : null
}
