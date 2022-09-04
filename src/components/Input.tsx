import { InputHTMLAttributes } from 'react'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`bg-gray p-3 placeholder-gray-800 border border-gray-200 rounded`}
    {...props}
  />
)
