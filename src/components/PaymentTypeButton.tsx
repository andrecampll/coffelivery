import { ReactNode } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'

type Props = {
  children: ReactNode
  value: string
  className?: string
}

export const PaymentTypeButton = ({ children, className, value }: Props) => (
  <RadioGroup.Item value={value} asChild>
    <div
      className={`rounded-md p-4 bg-gray-200 flex items-center uppercase text-black-200 gap-3 custom-radio border border-gray-200 select-none cursor-pointer ${className}`}
    >
      {children}
    </div>
  </RadioGroup.Item>
)
