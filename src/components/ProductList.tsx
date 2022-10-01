import { Product } from '../graphql/generated/graphql'
import { CoffeeCard } from './CoffeeCard'

type Props = {
  products: (Pick<
    Product,
    'id' | 'description' | 'name' | 'price' | 'categories'
  > & {
    image: {
      id: string
      url: string
    }
  })[]
}

export const ProductList = ({ products }: Props) => (
  <div className="mt-4 mb-10">
    <h2 className="text-2xl font-bold text-black">Our coffees</h2>

    <main className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <CoffeeCard key={product.id} {...product} />
      ))}
    </main>
  </div>
)
