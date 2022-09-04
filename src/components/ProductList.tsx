import { CoffeeCard } from './CoffeeCard'

const PRODUCTS = [
  {
    id: '1',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '2',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '3',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '4',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '5',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '6',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '7',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
  {
    id: '8',
    name: 'Traditional express',
    description: 'The traditional coffee made with hot water and ground beans',
    imageUrl: '/coffee.svg',
    price: '9.90',
  },
]

export const ProductList = () => (
  <div className="mt-4">
    <h2 className="text-2xl font-bold text-black">Our coffees</h2>

    <main className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {PRODUCTS.map((product) => (
        <CoffeeCard key={product.id} {...product} />
      ))}
    </main>
  </div>
)
