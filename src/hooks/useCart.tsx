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
  getProductAmount: (productId: string) => number
  decrementAmount: (productId: string) => void
}

type Props = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  const addProductToCart = useCallback(
    (product: Product) => {
      const items = [...products]

      const foundProduct = items.find((item) => item.id === product.id)

      if (foundProduct) {
        const updatedArray = items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item,
        )

        return setProducts(updatedArray)
      }

      return setProducts((products) => [...products, product])
    },
    [products],
  )

  const decrementAmount = useCallback(
    (productId: string) => {
      const items = [...products]

      const foundProduct = items.find((item) => item.id === productId)

      if (foundProduct && foundProduct.amount > 1) {
        const updatedArray = items.map((item) =>
          item.id === productId
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : item,
        )

        return setProducts(updatedArray)
      }

      setProducts((products) =>
        products.filter((product) => product.id !== productId),
      )
    },
    [products],
  )

  const getProductAmount = useCallback(
    (productId: string) => {
      const foundProduct = products.find((item) => item.id === productId)

      return foundProduct?.amount
    },
    [products],
  )

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        getProductAmount,
        decrementAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
