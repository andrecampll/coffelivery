import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const PaymentTypeButton = ({ children, className }: Props) => (
  <div
    className={`rounded-md p-4 bg-gray-200 flex items-center uppercase text-black-200 gap-3 ${className}`}
  >
    {children}
  </div>
)
