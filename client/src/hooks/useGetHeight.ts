import { useEffect, useRef, useState } from 'react'

export const useGetHeight = () => {
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

  return { height, stackRef }
}
