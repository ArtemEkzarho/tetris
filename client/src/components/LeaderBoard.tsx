import {
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { showLeaderBoardAtom } from '../common/atoms'
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
      height="100%"
      width="100%"
      sx={{ position: 'absolute', background: 'rgb(0 0 0 / 73%)', border: '2px solid orange' }}
      spacing={2}
      p={2}
    >
      <Typography variant="h1" align="center">
        LEADER BOARD
      </Typography>
      {!isPending && data.length && (
        <Stack flex={1} overflow="hidden">
          <TableContainer sx={{ height: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <th align="left">
                    <Typography variant="h1">NAME</Typography>
                  </th>
                  <th align="center">
                    <Typography variant="h1">TETRISES</Typography>
                  </th>
                  <th align="center">
                    <Typography variant="h1">LINES</Typography>
                  </th>
                  <th align="center">
                    <Typography variant="h1">SCORE</Typography>
                  </th>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(
                  (leader: { name: string; score: number; lines: number; tetrises: number }) => {
                    return (
                      <TableRow key={leader.name}>
                        <td>
                          <Typography variant="h1">{leader.name}</Typography>
                        </td>
                        <td align="center">
                          <Typography variant="h1">{leader.tetrises}</Typography>
                        </td>
                        <td align="center">
                          <Typography variant="h1">{leader.lines}</Typography>
                        </td>
                        <td align="center">
                          <Typography variant="h1">{leader.score}</Typography>
                        </td>
                      </TableRow>
                    )
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      )}

      <Stack direction="row" spacing={2}>
        <button className="menu-btn" onClick={() => setShowLeaderBoard(false)}>
          <Typography variant="h1">BACK TO GAME</Typography>
        </button>
        <button className="menu-btn" onClick={() => refetch()}>
          <Typography variant="h1">REFRESH</Typography>
        </button>
      </Stack>
    </Stack>
  ) : null
}
