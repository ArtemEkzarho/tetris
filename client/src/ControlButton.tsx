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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
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
