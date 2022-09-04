import { ReactNode } from 'react'
import { Header } from '../components'

type Props = {
  children: ReactNode
}

export const PublicLayout = ({ children }: Props) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '1120px',
      padding: '0 12px',
    }}
    className="mx-auto my-0 max-w-6xl px-3"
  >
    <Header />

    {children}
  </div>
)
