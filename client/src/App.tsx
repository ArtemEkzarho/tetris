import CssBaseline from '@mui/material/CssBaseline'
import { Divider, Stack } from '@mui/material'
import { TopPanel } from './components/TopPanel'
import { TetrisBoard } from './components/TetrisBoard'
import { EndGamePopover, LeaderBoard, SidePanel, StartGamePopover } from './components'
import { useGetHeight, useKeyPress } from './hooks'
import { useTetris } from './hooks/useTetris'

export const App = () => {
  const { resetBoard } = useTetris()
  useKeyPress()
  const { height, stackRef } = useGetHeight()

  return (
    <>
      <CssBaseline />
      <Stack
        className="main-container"
        height="100%"
        ref={stackRef}
        sx={{ width: `${height / 2}px`, position: 'relative' }}
      >
        <TopPanel />
        <Divider />
        <Stack direction="row" height="85%">
          <Stack width="85%" className="azure-board" style={{ position: 'relative' }}>
            <TetrisBoard />
            <StartGamePopover resetBoard={resetBoard} />
            <EndGamePopover resetBoard={resetBoard} />
          </Stack>
          <Divider orientation="vertical" />
          <SidePanel resetBoard={resetBoard} />
        </Stack>
        <LeaderBoard />
      </Stack>
    </>
  )
}
