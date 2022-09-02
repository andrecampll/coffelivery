import { Header, Banner, ProductList } from '../components'

export default function Home() {
  return (
    <div className="mx-auto my-0 max-w-6xl px-3">
      <Header />
      <Banner />
      <ProductList />
    </div>
  )
}
