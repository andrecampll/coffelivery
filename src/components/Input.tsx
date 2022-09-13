import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }: Props, ref) => (
    <input
      ref={ref}
      className={`bg-gray p-3 placeholder-gray-800 border border-gray-200 rounded ${className}`}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
