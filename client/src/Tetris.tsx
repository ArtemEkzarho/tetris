import { Box, Divider, Stack, Typography } from '@mui/material'
import './styles.css'
import { useTetris } from './useTetris'
import { TetroCell } from './components/TetroCell'
import { useKeyPress, useGetHeight } from './hooks'
import { useAtomValue } from 'jotai'
import { scoreAtom, tetrisesCountAtom } from './atoms'
import { Controls, EndGamePopover, SidePanel, StartGamePopover, LeaderBoard } from './components'

export const Tetris = () => {
  const { board, resetBoard } = useTetris()
  const score = useAtomValue(scoreAtom)
  const tetrisesCount = useAtomValue(tetrisesCountAtom)
  useKeyPress()
  const { height, stackRef } = useGetHeight()

  return (
    <Stack
      className="main-container"
      height="100%"
      ref={stackRef}
      sx={{ width: `${height / 2}px`, position: 'relative' }}
    >
      <Stack height="5%">
        <Stack alignItems="center" justifyContent="center" className="azure-board" height="100%">
          <Stack direction="row" spacing={1}>
            <Typography>SCORE</Typography>
            <Typography>{score}</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography>Tetrises</Typography>
            <Typography>{tetrisesCount} </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" height="80%">
        <Stack width="75%" className="azure-board" style={{ position: 'relative' }}>
          {board.map((row, y) => (
            <Stack flex={1} direction="row" key={y} justifyContent="space-between">
              {row.map((cell, x) => (
                <Box key={x} flex={1} className="tetro-cell-wrap">
                  {cell !== 'EMPTY_CELL' ? <TetroCell cell={cell} /> : null}
                </Box>
              ))}
            </Stack>
          ))}
          <StartGamePopover resetBoard={resetBoard} />
          <EndGamePopover resetBoard={resetBoard} />
        </Stack>
        <Divider orientation="vertical" />
        <SidePanel resetBoard={resetBoard} />
      </Stack>
      <Stack direction="row" height="15%">
        <Controls />
      </Stack>
      <LeaderBoard />
    </Stack>
  )
}
