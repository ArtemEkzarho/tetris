import { Stack } from '@mui/material'
import { BottomToolbar } from './components/BottomToolbar'
import { TetrisBoard } from './components/TetrisBoard'
import CssBaseline from '@mui/material/CssBaseline'
import { useTetris } from './hooks/useTetris'

export const App = () => {
  const { board, moveTo, rotate, resetBoard } = useTetris()

  return (
    <Stack height="100vh" width="50vh" m="auto">
      <CssBaseline />
      <Stack flex={1}>
        <TetrisBoard board={board} moveTo={moveTo} rotate={rotate} resetBoard={resetBoard} />
      </Stack>

      <BottomToolbar />
    </Stack>
  )
}
