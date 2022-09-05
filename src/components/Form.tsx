import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export const Form = ({
  children,
  title,
  description,
  icon,
  className,
}: Props) => (
  <form className={`bg-white-300 p-10 rounded ${className}`}>
    <header className="flex gap-2 mb-8">
      {icon}
      <div>
        <h3 className="text-black-500">{title}</h3>
        <span className="text-black-200">{description}</span>
      </div>
    </header>

    {children}
  </form>
)
