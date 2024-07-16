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
    <Stack direction="row" height="100%" pb={2} spacing={4}>
      <Stack width="50%" px={2} spacing={2}>
        <Stack direction="row" justifyContent="center" flex={1} px="30%">
          <ControlButton onClick={() => moveTo({ y: -1 })}>
            <ArrowUpward />
          </ControlButton>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing="25%" flex={1}>
          <ControlButton onClick={() => moveTo({ x: -1 })}>
            <ArrowBack />
          </ControlButton>
          <ControlButton onClick={() => moveTo({ x: 1 })}>
            <ArrowForward />
          </ControlButton>
        </Stack>
        <Stack direction="row" justifyContent="center" flex={1} px="30%">
          <ControlButton onClick={() => moveTo({ y: 1 })}>
            <ArrowDownward />
          </ControlButton>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width="50%"
        spacing={4}
        px={2}
        py={4}
      >
        <ControlButton onClick={() => rotate('left')}>
          <RotateRight />
        </ControlButton>
        <ControlButton onClick={() => rotate('right')}>
          <RotateLeft />
        </ControlButton>
      </Stack>
    </Stack>
  )
}
