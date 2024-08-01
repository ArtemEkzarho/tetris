import CssBaseline from '@mui/material/CssBaseline'
import { Divider, Stack } from '@mui/material'
import { TopPanel } from './components/TopPanel'
import { TetrisBoard } from './components/TetrisBoard'
import { EndGamePopover, LeaderBoard, SidePanel, StartGamePopover } from './components'
import { useGetHeight, useKeyPress, useMovements } from './hooks'
import { useTetris } from './hooks/useTetris'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { useRef } from 'react'

export const App = () => {
  const { resetBoard } = useTetris()
  useKeyPress()
  const { moveTo, rotate } = useMovements()
  const { height, stackRef } = useGetHeight()
  const touchStartTimeRef = useRef<number>(0)
  const longTouchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const softDropIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleTouchStart = () => {
    // Clear any existing long touch timeout or interval
    if (longTouchTimeoutRef.current) {
      clearTimeout(longTouchTimeoutRef.current)
    }
    if (softDropIntervalRef.current) {
      clearInterval(softDropIntervalRef.current)
    }

    longTouchTimeoutRef.current = setTimeout(() => {
      softDropIntervalRef.current = setInterval(() => moveTo({ y: 1 }), 100) // Adjust interval as needed
    }, 500) // Adjust long touch detection duration as needed

    touchStartTimeRef.current = Date.now()
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    const touchDuration = Date.now() - touchStartTimeRef.current

    if (touchDuration < 500) {
      // Short touch
      const touchX = event.changedTouches[0].clientX
      const screenWidth = window.innerWidth

      // Short touch: move left, right, or rotate
      if (touchX < screenWidth / 3) {
        moveTo({ x: -1 })
      } else if (touchX > (screenWidth * 2) / 3) {
        moveTo({ x: 1 })
      } else {
        rotate('right')
      }
    }

    // Clear the long touch timeout and soft drop interval when touch ends
    if (longTouchTimeoutRef.current) {
      clearTimeout(longTouchTimeoutRef.current)
      longTouchTimeoutRef.current = null
    }
    if (softDropIntervalRef.current) {
      clearInterval(softDropIntervalRef.current)
      softDropIntervalRef.current = null
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack height="100%" width="100%" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
      </Stack>
    </ThemeProvider>
  )
}
