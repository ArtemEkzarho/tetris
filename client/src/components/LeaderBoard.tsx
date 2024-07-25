import { Stack, Typography } from '@mui/material'
import { showLeaderBoardAtom } from '../atoms'
import { useAtom } from 'jotai'
import { useQuery } from '@tanstack/react-query'

export const LeaderBoard = () => {
  const [showLeaderBoard, setShowLeaderBoard] = useAtom(showLeaderBoardAtom)

  const { isPending, data, refetch } = useQuery({
    queryKey: ['leaders'],
    queryFn: () => fetch('/api/leaders').then((res) => res.json()),
    enabled: showLeaderBoard,
  })

  return showLeaderBoard ? (
    <Stack
      height="85%"
      width="100%"
      sx={{ position: 'absolute', background: 'rgb(0 0 0 / 73%)', border: '2px solid orange' }}
      spacing={2}
      p={2}
    >
      <Typography align="center">Leader board</Typography>
      {!isPending && data.length && (
        <Stack flex={1}>
          {data.map((leader: { name: string; score: number }) => {
            return (
              <Stack direction="row" spacing={1}>
                <Typography flex={1} noWrap textOverflow="ellipsis">
                  {leader.name}
                </Typography>
                <Typography>{leader.score}</Typography>
              </Stack>
            )
          })}
        </Stack>
      )}

      <Stack direction="row" spacing={2}>
        <button className="menu-btn" onClick={() => setShowLeaderBoard(false)}>
          Back to game
        </button>
        <button className="menu-btn" onClick={() => refetch()}>
          Refresh
        </button>
      </Stack>
    </Stack>
  ) : null
}
