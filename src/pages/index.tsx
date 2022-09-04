import { ReactNode } from 'react'
import { PublicLayout } from '../layouts'
import { Banner, ProductList } from '../components'

export default function Home() {
  return (
    <>
      <Banner />
      <ProductList />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}
