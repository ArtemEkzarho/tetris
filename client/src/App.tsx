import { Grid, Button, Stack } from '@mui/material'
import { TetrisBoard } from './components/TetrisBoard'
import CssBaseline from '@mui/material/CssBaseline'
import { useTetris } from './hooks/useTetris'

import { GitHubLink } from './components/GitHubLink'
import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
  RotateLeft,
} from '@mui/icons-material'

export const App = () => {
  const { board, moveTo, rotate, resetBoard } = useTetris()

  return (
    <Stack height="100vh" m="auto">
      <CssBaseline />
      <GitHubLink />
      <Stack flex={1}>
        <Stack height="100%" justifyContent="center" alignItems="center" pt={4}>
          <TetrisBoard board={board} moveTo={moveTo} rotate={rotate} resetBoard={resetBoard} />
          <Stack width="50vh" p={2}>
            <Grid container>
              <Grid item xs={6}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item></Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      <ArrowUpward />
                    </Button>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => moveTo({ x: -1 })}>
                      <ArrowBack />
                    </Button>
                  </Grid>
                  <Grid item></Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => moveTo({ x: 1 })}>
                      <ArrowForward />
                    </Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item></Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => moveTo({ y: 1 })}>
                      <ArrowDownward />
                    </Button>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Stack justifyContent="center" alignItems="center" height="100%">
                  <Button variant="outlined" size="large" color="primary" onClick={() => rotate()}>
                    <RotateLeft />
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
