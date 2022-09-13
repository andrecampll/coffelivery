import { forwardRef, InputHTMLAttributes } from 'react'

type Props = {
  className?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, error, ...props }: Props, ref) => (
    <div className={`flex flex-col ${className}`}>
      <input
        ref={ref}
        className={`bg-gray p-3 placeholder-gray-800 border border-gray-200 rounded`}
        {...props}
      />
      {error && <span className="mt-2 text-sm text-red-800">{error}</span>}
    </div>
  ),
)

Input.displayName = 'Input'
