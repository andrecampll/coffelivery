export type Product = {
  id: string
  name: string
  price: number
  imageUrl: string
  description: string
  category: string[] | string
  amount?: number
}
