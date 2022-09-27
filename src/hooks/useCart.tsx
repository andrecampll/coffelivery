import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'

import {
  addProduct,
  cartReducer,
  decrementProductAmount,
  removeProduct,
} from '../store/cart'

import { Product } from '../types'

type CartContextData = {
  products: Product[]
  addProductToCart: (product: Product) => void
  getProductAmount: (productId: string) => number
  deleteProduct: (productId: string) => void
  decrementAmount: (productId: string) => void
  subtotalPrice: number
  totalPrice: number
}

type Props = {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: Props) => {
  const [cartState, dispatch] = useReducer(cartReducer, { products: [] })

  const addProductToCart = useCallback((product: Product) => {
    dispatch(addProduct(product))
  }, [])

  const decrementAmount = useCallback((productId: string) => {
    dispatch(decrementProductAmount(productId))
  }, [])

  const getProductAmount = useCallback(
    (productId: string) => {
      const foundProduct = cartState.products.find(
        (item) => item.id === productId,
      )

      return foundProduct?.amount || 0
    },
    [cartState.products],
  )

  const deleteProduct = useCallback(
    (productId: string) => dispatch(removeProduct(productId)),
    [],
  )

  const subtotalPrice = useMemo(
    () =>
      cartState.products.reduce((prev, curr) => {
        return prev + curr.price * curr.amount
      }, 0),
    [cartState.products],
  )

  const totalPrice = useMemo(() => subtotalPrice + 3.7, [subtotalPrice])

  return (
    <CartContext.Provider
      value={{
        products: cartState.products,
        addProductToCart,
        getProductAmount,
        decrementAmount,
        subtotalPrice,
        totalPrice,
        deleteProduct,
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
