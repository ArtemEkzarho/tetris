import { Stack } from '@mui/material'
import { useMovements } from '../hooks'

export const Controls = () => {
  const { moveTo, rotate } = useMovements()

  return (
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
  )
}
