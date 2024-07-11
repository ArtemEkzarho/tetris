import { ReactNode } from 'react'

export const ControlButton = ({
  children,
  type,
  onClick,
}: {
  children: ReactNode
  type?: 'medium' | 'big'
  onClick?: () => void
}) => (
  <button
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: type === 'big' ? '40px' : '30px',
      height: type === 'big' ? '40px' : '30px',
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
