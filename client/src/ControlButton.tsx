import { ReactNode } from 'react'

export const ControlButton = ({
  children,
  onClick,
  size,
}: {
  children: ReactNode
  onClick?: () => void
  size?: number
}) => (
  <button
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size ? `${size}px` : '100%',
      height: size ? `${size}px` : '100%',
      fontSize: '20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      userSelect: 'none',
    }}
    onClick={onClick}
  >
    {children}
  </button>
)
