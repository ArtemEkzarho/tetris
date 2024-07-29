import { Box, Stack } from '@mui/material'
import '../styles.css'
import { TetroCell } from './TetroCell'
import { useAtomValue } from 'jotai'
import { boardAtom } from '../common/atoms'

export const TetrisBoard = () => {
  const board = useAtomValue(boardAtom)

  return board.map((row, y) => (
    <Stack flex={1} direction="row" key={y} justifyContent="space-between">
      {row.map((cell, x) => (
        <Box key={x} flex={1} className="tetro-cell-wrap">
          {cell !== 'EMPTY_CELL' ? <TetroCell cell={cell} /> : null}
        </Box>
      ))}
    </Stack>
  ))
}
