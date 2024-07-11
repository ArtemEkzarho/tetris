import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
  RotateLeft,
  RotateRight,
} from '@mui/icons-material'
import { useMovements } from '../hooks/useMovements'
import { Stack } from '@mui/material'
import { ControlButton } from './common/ControlButton'

export const ControlsPanel = () => {
  const { moveTo, rotate } = useMovements()

  return (
    <Stack direction="row" justifyContent="space-around" height="100%" pb={2}>
      <Stack justifyContent="space-between" width="20vh">
        <Stack direction="row" justifyContent="center">
          <ControlButton onClick={() => moveTo({ y: -1 })}>
            <ArrowUpward />
          </ControlButton>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <ControlButton onClick={() => moveTo({ x: -1 })}>
            <ArrowBack />
          </ControlButton>
          <ControlButton onClick={() => moveTo({ x: 1 })}>
            <ArrowForward />
          </ControlButton>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <ControlButton onClick={() => moveTo({ y: 1 })}>
            <ArrowDownward />
          </ControlButton>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-around" alignItems="center" width="20vh">
        <ControlButton type="big" onClick={() => rotate('left')}>
          <RotateRight />
        </ControlButton>
        <ControlButton type="big" onClick={() => rotate('right')}>
          <RotateLeft />
        </ControlButton>
      </Stack>
    </Stack>
  )
}
