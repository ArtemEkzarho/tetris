import { Stack } from '@mui/material'
import { TetrisBoard } from './components/TetrisBoard'
import CssBaseline from '@mui/material/CssBaseline'
import { useTetris } from './hooks/useTetris'
import { GitHubLink } from './components/GitHubLink'
import { ControlsPanel } from './components/ControlsPanel'

export const App = () => {
  const { board, resetBoard } = useTetris()

  return (
    <Stack height="100vh" m="auto">
      <CssBaseline />
      <GitHubLink />
      <Stack flex={1}>
        <Stack height="100%" justifyContent="center" alignItems="center" pt={4}>
          <TetrisBoard board={board} resetBoard={resetBoard} />
          <ControlsPanel />
        </Stack>
      </Stack>
    </Stack>
  )
}
