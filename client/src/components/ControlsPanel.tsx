import { Grid, Button, Stack } from '@mui/material'

import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
  RotateLeft,
} from '@mui/icons-material'
import { useMovements } from '../hooks/useMovements'

export const ControlsPanel = () => {
  const { moveTo, rotate } = useMovements()

  return (
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
  )
}
