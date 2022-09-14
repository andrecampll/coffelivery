import { ReactNode } from 'react'
import { useGetProductsQuery as useProducts } from '../graphql/generated/graphql'
import { PublicLayout } from '../layouts'
import { HomeTemplate } from '../templates'

export default function Home() {
  const { data } = useProducts()

  return <HomeTemplate products={data.products} />
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}
