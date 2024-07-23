import { Box, Stack } from '@mui/material'
import { FallingTetrominoCell, FixedTetromino } from '../types'

type Props = {
  cell: FallingTetrominoCell | FixedTetromino
}

const colors = {
  I: '#36ef06',
  J: '#280dfc',
  L: '#8e0ac7',
  O: '#b10b0b',
  T: '#4bacfa',
  S: '#f49c00',
  Z: '#280dfc',
  FIXED_I: '#36ef06',
  FIXED_J: '#280dfc',
  FIXED_L: '#8e0ac7',
  FIXED_O: '#b10b0b',
  FIXED_T: '#4bacfa',
  FIXED_S: '#f49c00',
  FIXED_Z: '#280dfc',
}

export const TetroCell = ({ cell }: Props) => {
  return (
    <Box
      className="tetro-cell"
      color={colors[cell]}
      height="100%"
      width="100%"
      style={{ borderRadius: '2px' }}
    >
      <Stack width="25%" height="25%" justifyContent="end" alignItems="end" className="tetro-glare">
        <Box width="50%" height="50%" className="dot" />
      </Stack>
    </Box>
  )
}
