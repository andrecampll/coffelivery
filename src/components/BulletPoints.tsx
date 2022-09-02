import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { cloneElement } from 'react'

const iconProps = {
  weight: 'fill',
  size: 16,
  color: '#fff',
}

const POINTS = [
  {
    description: 'Simple and secure purchase',
    component: <ShoppingCart />,
    bgColor: 'bg-secondary-800',
  },
  {
    description: 'Packaging keeps the coffee intact',
    component: <Package />,
    bgColor: 'bg-black-500',
  },
  {
    description: 'Fast and tracked delivery',
    component: <Timer />,
    bgColor: 'bg-secondary-500',
  },
  {
    description: 'Coffee arrives fresh to you',
    component: <Coffee />,
    bgColor: 'bg-primary-500',
  },
]

export const BulletPoints = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {POINTS.map((point) => (
      <div className="flex items-center gap-3" key={point.description}>
        <div className={`rounded-full ${point.bgColor} w-8 p-2`}>
          {cloneElement(point.component, iconProps)}
        </div>

        <span className="text-black-500">{point.description}</span>
      </div>
    ))}
  </div>
)
