import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  kind?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonIcon = ({ children, kind = 'primary', ...props }: Props) => (
  <button
    className={`${
      kind === 'primary' ? 'bg-secondary-200' : 'bg-primary-800'
    } rounded-md p-2`}
    {...props}
  >
    {children}
  </button>
)
