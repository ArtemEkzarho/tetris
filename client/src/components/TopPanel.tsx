import { Box, Stack, Typography } from '@mui/material'
import { TetroCell } from './TetroCell'
import { useAtomValue } from 'jotai'
import { nextTetrominoAtom, scoreAtom, tetrisesCountAtom } from '../common/atoms'

export const TopPanel = () => {
  const score = useAtomValue(scoreAtom)
  const tetrisesCount = useAtomValue(tetrisesCountAtom)
  const nextTetromino = useAtomValue(nextTetrominoAtom)

  return (
    <Stack height="15%" direction="row">
      <Stack className="azure-board" height="100%" flex={1} alignItems="center">
        <Typography>SCORE</Typography>
        <Typography>{score}</Typography>
        <Typography>Tetrises</Typography>
        <Typography>{tetrisesCount} </Typography>
      </Stack>
      <Stack className="azure-board" height="100%" flex={1} alignItems="center">
        <Typography>NEXT</Typography>
        <Stack alignItems="center" justifyContent="center" width="53%" flex={1}>
          {nextTetromino &&
            nextTetromino.tetromino[nextTetromino.rotation].map((row, y) => (
              <Stack flex={1} direction="row" key={y} justifyContent="space-between" width="93%">
                {row.map((cell, x) => (
                  <Box key={x} flex={1} className="tetro-cell-wrap">
                    {cell !== 'EMPTY_CELL' ? <TetroCell cell={cell} /> : null}
                  </Box>
                ))}
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
