import { useEffect } from 'react'
import { useMovements } from './useMovements'

export const useKeyPress = () => {
  const { moveTo, rotate } = useMovements()

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
}
