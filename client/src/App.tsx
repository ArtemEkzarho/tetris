import { Grid, Stack } from '@mui/material'
import { TetrisBoard } from './components/TetrisBoard'
import CssBaseline from '@mui/material/CssBaseline'
import { useTetris } from './hooks/useTetris'
import { GitHubLink } from './components/GitHubLink'
import { ControlsPanel } from './components/ControlsPanel'

import './styles.css'

export const App = () => {
  const { board, resetBoard } = useTetris()

  return (
    <Grid direction="column" container className="container">
      <CssBaseline />
      <Grid item flex="80%">
        <Stack height="100%" justifyContent="center" alignItems="center">
          <TetrisBoard board={board} resetBoard={resetBoard} />
        </Stack>
      </Grid>
      <Grid item flex="20%">
        <ControlsPanel />
      </Grid>
      <GitHubLink />
    </Grid>
  )
}
