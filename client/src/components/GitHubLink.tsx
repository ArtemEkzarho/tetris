import { GitHub } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

export const GitHubLink = () => (
  <Tooltip title="GitHub repository">
    <IconButton
      size="small"
      target="_blank"
      href="https://github.com/ArtemEkzarho/tetris-reactts"
      sx={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1 }}
    >
      <GitHub />
    </IconButton>
  </Tooltip>
)
