import { Box, Typography } from '@mui/material'
import { BottomToolbar } from './components/BottomToolbar'
import { TetrisBoard } from './TetrisBoard'

export const App = () => {
  return (
    <Box
      sx={{
        minWidth: 320,
        maxWidth: 320,
        m: 'auto',
        p: 2,
        pt: 3,
        backgroundColor: 'background.paper',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6">Blocktopia: The Misaligned Chronicles</Typography>
      <TetrisBoard />
      <BottomToolbar />
    </Box>
  )
}
