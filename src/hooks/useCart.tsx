import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

import { Product } from '../types'

type CartContextData = {
  products: Product[]
  addProductToCart: (product: Product) => void
}

type Props = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProductToCart = useCallback(
    (product: Product) => setProducts((products) => [...products, product]),
    [],
  )

  return (
    <CartContext.Provider value={{ products, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
