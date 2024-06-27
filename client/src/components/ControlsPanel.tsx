import { Grid, IconButton, Stack } from '@mui/material'
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
            <Grid item />
            <Grid item>
              <IconButton size="small" color="primary">
                <ArrowUpward />
              </IconButton>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <IconButton size="small" color="primary" onClick={() => moveTo({ x: -1 })}>
                <ArrowBack />
              </IconButton>
            </Grid>
            <Grid item />
            <Grid item>
              <IconButton size="small" color="primary" onClick={() => moveTo({ x: 1 })}>
                <ArrowForward />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item />
            <Grid item>
              <IconButton size="small" color="primary" onClick={() => moveTo({ y: 1 })}>
                <ArrowDownward />
              </IconButton>
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent="center" alignItems="center" height="100%">
            <IconButton size="small" color="primary" onClick={() => rotate()}>
              <RotateLeft />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
