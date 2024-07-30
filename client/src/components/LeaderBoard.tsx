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
      <Typography align="center">LEADER BOARD</Typography>
      {!isPending && data.length && (
        <Stack flex={1} overflow="hidden">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <th align="left">NAME</th>
                  <th align="center">TETRISES</th>
                  <th align="center">LINES</th>
                  <th align="center">SCORE</th>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(
                  (leader: { name: string; score: number; lines: number; tetrises: number }) => {
                    return (
                      <TableRow key={leader.name}>
                        <td>{leader.name}</td>
                        <td align="center">{leader.tetrises}</td>
                        <td align="center">{leader.lines}</td>
                        <td align="center">{leader.score}</td>
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
          <Typography>BACK TO GAME</Typography>
        </button>
        <button className="menu-btn" onClick={() => refetch()}>
          <Typography>REFRESH</Typography>
        </button>
      </Stack>
    </Stack>
  ) : null
}
