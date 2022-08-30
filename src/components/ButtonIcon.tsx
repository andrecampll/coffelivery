import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const ButtonIcon = ({ children }: Props) => (
  <button className="bg-secondary-200 rounded-md p-2">{children}</button>
)
