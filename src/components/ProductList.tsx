import { PRODUCTS } from '../hooks/mock'
import { CoffeeCard } from './CoffeeCard'

export const ProductList = () => (
  <div className="mt-4 mb-10">
    <h2 className="text-2xl font-bold text-black">Our coffees</h2>

    <main className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {PRODUCTS.map((product) => (
        <CoffeeCard key={product.id} {...product} />
      ))}
    </main>
  </div>
)
