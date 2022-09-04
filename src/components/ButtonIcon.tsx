import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  kind?: 'primary' | 'secondary'
}

export const ButtonIcon = ({ children, kind = 'primary' }: Props) => (
  <button
    className={`${
      kind === 'primary' ? 'bg-secondary-200' : 'bg-primary-800'
    } rounded-md p-2`}
  >
    {children}
  </button>
)
