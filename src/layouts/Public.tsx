import { ReactNode } from 'react'
import { Header } from '../components'

type Props = {
  children: ReactNode
}

export const PublicLayout = ({ children }: Props) => (
  <div className="mx-auto my-0 max-w-6xl px-3">
    <Header />

    {children}
  </div>
)
