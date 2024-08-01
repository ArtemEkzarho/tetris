import CssBaseline from '@mui/material/CssBaseline'
import { Divider, Stack } from '@mui/material'
import { TopPanel } from './components/TopPanel'
import { TetrisBoard } from './components/TetrisBoard'
import { EndGamePopover, LeaderBoard, SidePanel, StartGamePopover } from './components'
import { useGetHeight, useKeyPress, useMovements } from './hooks'
import { useTetris } from './hooks/useTetris'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

export const App = () => {
  const { resetBoard } = useTetris()
  useKeyPress()
  const { moveTo, rotate } = useMovements()
  const { height, stackRef } = useGetHeight()

  const handleTouchStart = (event: React.TouchEvent) => {
    const touchX = event.touches[0].clientX
    const touchY = event.touches[0].clientY
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    if (touchY > screenHeight / 2) {
      // Fast drop
      moveTo({ y: 1 })
    } else if (touchX < screenWidth / 3) {
      moveTo({ x: -1 })
    } else if (touchX > (screenWidth * 2) / 3) {
      moveTo({ x: 1 })
    } else {
      rotate('right')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        className="main-container"
        height="100%"
        ref={stackRef}
        sx={{ width: `${height / 2}px`, position: 'relative' }}
        onTouchStart={handleTouchStart}
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
    </ThemeProvider>
  )
}
