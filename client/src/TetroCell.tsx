import { Box, Stack } from '@mui/material'
import { FallingTetrominoCell, FixedTetromino } from './types'

type Props = {
  cell: FallingTetrominoCell | FixedTetromino
}

export const TetroCell = ({ cell }: Props) => {
  console.log(cell)
  return (
    <Box className="tetro-cell" height="100%" width="100%" style={{ borderRadius: '2px' }}>
      <Stack
        width="25%"
        height="25%"
        justifyContent="end"
        alignItems="end"
        style={{ background: 'white' }}
      >
        <Box width="50%" height="50%" style={{ background: '#4bacfa' }} />
      </Stack>
    </Box>
  )
}
