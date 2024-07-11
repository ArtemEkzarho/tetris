import { ReactNode } from 'react'

export const MenuButton = ({
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
      height: '30px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      fontWeight: '600',
      userSelect: 'none',
    }}
    onClick={onClick}
  >
    {children}
  </button>
)
