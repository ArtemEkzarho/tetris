import CssBaseline from '@mui/material/CssBaseline'
import { Box, Divider, Stack, Typography } from '@mui/material'
import './styles.css'
import { useTetris } from './useTetris'
import { TetroCell } from './components/TetroCell'
import { useMovements } from './useMovements'
import { useEffect, useRef, useState } from 'react'
import { useAtomValue } from 'jotai'
import { scoreAtom, tetrisesCountAtom } from './atoms'
import { StartGamePopover } from './components/StartGamePopover'
import { EndGamePopover } from './components/EndGamePopover'
import { SidePanel } from './components/SidePanel'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      retry: false,
    },
  },
})

export const App = () => {
  const { board, resetBoard } = useTetris()
  const { moveTo, rotate } = useMovements()
  const score = useAtomValue(scoreAtom)
  const tetrisesCount = useAtomValue(tetrisesCountAtom)

  const stackRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (stackRef.current) {
      setHeight(stackRef.current.clientHeight)
    }

    const handleResize = () => {
      if (stackRef.current) {
        setHeight(stackRef.current.clientHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyZ':
          rotate('left')
          break
        case 'KeyX':
          rotate('right')
          break
        case 'ArrowUp':
          rotate('right')
          break
        case 'ArrowDown':
          moveTo({ y: 1 })
          break
        case 'ArrowLeft':
          moveTo({ x: -1 })
          break
        case 'ArrowRight':
          moveTo({ x: 1 })
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [moveTo, rotate])

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Stack
        className="main-container"
        height="100%"
        ref={stackRef}
        style={{ width: `${height / 2}px` }}
      >
        <Stack height="10%">
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
        <Stack direction="row" height="90%">
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
        <Stack direction="row" height="20%">
          <Stack direction="row" height="100%" width="100%" p="5%" spacing="3%">
            <Stack width="50%" spacing="3%">
              <Stack direction="row" justifyContent="center" flex={1} px="30%">
                <button className="control-btn" onClick={() => rotate('right')}>
                  ↑
                </button>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing="25%" flex={1}>
                <button className="control-btn" onClick={() => moveTo({ x: -1 })}>
                  ←
                </button>
                <button className="control-btn" onClick={() => moveTo({ x: 1 })}>
                  →
                </button>
              </Stack>
              <Stack direction="row" justifyContent="center" flex={1} px="30%">
                <button className="control-btn" onClick={() => moveTo({ y: 1 })}>
                  ↓
                </button>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              width="50%"
              spacing="15%"
              p="3%"
            >
              <button className="control-btn" onClick={() => rotate('left')}>
                ↻
              </button>
              <button className="control-btn" onClick={() => rotate('right')}>
                ↺
              </button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </QueryClientProvider>
  )
}
