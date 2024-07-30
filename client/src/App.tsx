import CssBaseline from '@mui/material/CssBaseline'
import { Divider, Stack } from '@mui/material'
import { TopPanel } from './components/TopPanel'
import { TetrisBoard } from './components/TetrisBoard'
import { EndGamePopover, LeaderBoard, SidePanel, StartGamePopover } from './components'
import { useGetHeight, useKeyPress, useMovements } from './hooks'
import { useTetris } from './hooks/useTetris'
import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout as ReturnType<typeof setTimeout>)
      timeout = null
      func(...args)
    }

    clearTimeout(timeout as ReturnType<typeof setTimeout>)
    timeout = setTimeout(later, wait)
  }
}

export const App = () => {
  const { resetBoard } = useTetris()
  useKeyPress()
  const { height, stackRef } = useGetHeight()
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const { moveTo, rotate } = useMovements()

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX)
    setTouchStartY(event.touches[0].clientY)
  }

  const handleTouchMove = debounce((event: React.TouchEvent) => {
    event.preventDefault()
    const touch = event.touches[0]
    const dx = touch.clientX - (touchStartX ?? 0)
    const dy = touch.clientY - (touchStartY ?? 0)

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        moveTo({ x: 1 })
      } else {
        moveTo({ x: -1 })
      }
    } else {
      if (dy > 0) {
        moveTo({ y: 1 })
      }
    }
  }, 100)

  const handleTouchEnd = debounce((event: React.TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX
    const touchEndY = event.changedTouches[0].clientY
    const dx = touchEndX - (touchStartX ?? 0)
    const dy = touchEndY - (touchStartY ?? 0)

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      // Tap detected
      if ((touchStartX ?? 0) > window.innerWidth / 2) {
        rotate('right')
      } else {
        rotate('left')
      }
    } else if (dy > 50) {
      moveTo({ y: 1 }) //need realize hard drop
    } else if (dy < -50) {
      moveTo({ y: -1 })
    }

    setTouchStartX(null)
    setTouchStartY(null)
  }, 100)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        className="main-container"
        height="100%"
        ref={stackRef}
        sx={{ width: `${height / 2}px`, position: 'relative' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
