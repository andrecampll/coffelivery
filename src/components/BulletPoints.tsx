import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

const POINTS = [
  {
    description: 'Simple and secure purchase',
    component: <ShoppingCart weight="fill" size={16} color="#fff" />,
    bgColor: 'bg-secondary-800',
  },
  {
    description: 'Packaging keeps the coffee intact',
    component: <Package weight="fill" size={16} color="#fff" />,
    bgColor: 'bg-black-500',
  },
  {
    description: 'Fast and tracked delivery',
    component: <Timer weight="fill" size={16} color="#fff" />,
    bgColor: 'bg-secondary-500',
  },
  {
    description: 'Coffee arrives fresh to you',
    component: <Coffee weight="fill" size={16} color="#fff" />,
    bgColor: 'bg-primary-500',
  },
]

export const BulletPoints = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {POINTS.map((point) => (
        <div className="flex items-center gap-3" key={point.description}>
          <div className={`rounded-full ${point.bgColor} w-8 p-2`}>
            {point.component}
          </div>

          <span className="text-black-500">{point.description}</span>
        </div>
      ))}
    </div>
  )
}
