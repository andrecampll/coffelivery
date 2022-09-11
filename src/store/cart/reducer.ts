import { Product } from '../../types'
import { ActionTypes } from './actions'

type CartState = {
  products: Product[]
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const { products } = state
      const { newProduct } = action.payload

      const foundProduct = products.find((item) => item.id === newProduct.id)

      if (foundProduct) {
        const updatedArray = products.map((item) =>
          item.id === newProduct.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item,
        )

        return {
          products: updatedArray,
        }
      }

      return {
        ...state,
        products: [...products, newProduct],
      }
    }

    case ActionTypes.DECREMENT_PRODUCT_AMOUNT: {
      const { products } = state
      const { productId } = action.payload

      const foundProduct = products.find((item) => item.id === productId)

      if (foundProduct && foundProduct.amount > 1) {
        const updatedArray = products.map((item) =>
          item.id === productId
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : item,
        )

        return {
          products: updatedArray,
        }
      }

      const updatedArray = products.filter(
        (product) => product.id !== productId,
      )

      return {
        ...state,
        products: updatedArray,
      }
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const updatedArray = state.products.filter(
        (product) => product.id !== action.payload.productId,
      )

      return {
        products: updatedArray,
      }
    }
  }
}
