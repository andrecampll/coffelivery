/* eslint-disable no-unused-vars */
import { Product } from '../../types'

export enum ActionTypes {
  ADD_PRODUCT = '@cart/ADD_PRODUCT',
  REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT',
  INCREMENT_PRODUCT_AMOUNT = '@cart/INCREMENT_PRODUCT_AMOUNT',
  DECREMENT_PRODUCT_AMOUNT = '@cart/DECREMENT_PRODUCT_AMOUNT',
}

export const addProduct = (newProduct: Product) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: {
    newProduct,
  },
})

export const removeProduct = (productId: string) => ({
  type: ActionTypes.REMOVE_PRODUCT,
  payload: {
    productId,
  },
})

export const incrementProductAmount = (productId: string) => ({
  type: ActionTypes.INCREMENT_PRODUCT_AMOUNT,
  payload: {
    productId,
  },
})

export const decrementProductAmount = (productId: string) => ({
  type: ActionTypes.DECREMENT_PRODUCT_AMOUNT,
  payload: {
    productId,
  },
})
