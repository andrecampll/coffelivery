export type Product = {
  id: string
  name: string
  price: number
  image: {
    id: string
    url: string
  }
  description: string
  categories: string[] | string
  amount?: number
}
