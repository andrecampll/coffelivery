import { Banner, ProductList } from '../components'
import { Product } from '../graphql/generated/graphql'

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

export const HomeTemplate = ({ products }: Props) => (
  <>
    <Banner />
    <ProductList products={products} />
  </>
)
