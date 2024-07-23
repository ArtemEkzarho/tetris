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
      cursor: 'pointer',
      userSelect: 'none',
    }}
    onClick={onClick}
  >
    {children}
  </button>
)
