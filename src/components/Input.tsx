import { InputHTMLAttributes } from 'react'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: Props) => (
  <input
    className={`bg-gray p-3 placeholder-gray-800 border border-gray-200 rounded ${className}`}
    {...props}
  />
)
