import { Grid, Tooltip, IconButton } from '@mui/material'
import { GitHub } from '@mui/icons-material'

export const BottomToolbar = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center" mt={1}>
      <Grid item></Grid>
      <Grid item>
        <Tooltip title="GitHub repository">
          <IconButton
            size="small"
            target="_blank"
            href="https://github.com/ArtemEkzarho/tetris-reactts"
          >
            <GitHub />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}
