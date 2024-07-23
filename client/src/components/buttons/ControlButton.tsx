import { ReactNode } from 'react'

export const ControlButton = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) => (
  <button
    style={{
      cursor: 'pointer',
      userSelect: 'none',
      height: '100%',
      width: '100%',
    }}
    onClick={onClick}
  >
    {children}
  </button>
)
