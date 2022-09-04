import { CoffeeCard } from './CoffeeCard'

export const ProductList = () => (
  <div className="mt-4">
    <h2 className="text-2xl font-bold text-black">Our coffees</h2>

    <main className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <CoffeeCard
        name="Traditional express"
        description="The traditional coffee made with hot water and ground beans"
        imageUrl="/coffee.svg"
        price="9.90"
      />
    </main>
  </div>
)
