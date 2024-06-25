import { Stack } from '@mui/material'
import { BottomToolbar } from './components/BottomToolbar'
import { TetrisBoard } from './components/TetrisBoard'
import CssBaseline from '@mui/material/CssBaseline'
import { useTetris } from './hooks/useTetris'
import { SideBoard } from './components/SideBoard'

export const App = () => {
  const { board, moveTo, rotate, resetBoard } = useTetris()

  return (
    <Stack height="100vh" m="auto">
      <CssBaseline />
      <Stack flex={1}>
        <Stack direction="row" height="100%" justifyContent="center">
          <TetrisBoard board={board} moveTo={moveTo} rotate={rotate} resetBoard={resetBoard} />
          <SideBoard resetBoard={resetBoard} />
        </Stack>
      </Stack>

      <BottomToolbar />
    </Stack>
  )
}
