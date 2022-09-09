import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: Props) => (
  <button
    className="bg-secondary-500 w-full text-white py-3 rounded-md uppercase font-medium"
    {...props}
  >
    {children}
  </button>
)
