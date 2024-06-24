import { useEffect } from 'react'

const useMobileControls = (
  rotate: () => void,
  moveTo: ({ x, y }: { x?: number | undefined; y?: number | undefined }) => void
) => {
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX
      touchStartY = event.touches[0].clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!touchStartX || !touchStartY) return

      const touchEndX = event.changedTouches[0].clientX
      const touchEndY = event.changedTouches[0].clientY
      const dx = touchEndX - touchStartX
      const dy = touchEndY - touchStartY
      const absDx = Math.abs(dx)
      const absDy = Math.abs(dy)

      // Determine the swipe direction
      if (absDx > absDy) {
        // Horizontal movement
        if (dx > 0) {
          moveTo({ x: 1 }) // Swipe right
        } else {
          moveTo({ x: -1 }) // Swipe left
        }
      } else {
        // Vertical movement
        if (dy > 0) {
          moveTo({ y: 1 }) // Swipe down
        } else {
          rotate() // Swipe up (Rotate)
        }
      }

      // Reset initial touch coordinates
      touchStartX = 0
      touchStartY = 0
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [moveTo, rotate]) // Ensure `moveTo` and `rotate` are stable functions
}

export default useMobileControls
