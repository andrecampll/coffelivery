import { Trash } from 'phosphor-react'
import { useCallback } from 'react'
import { Product } from '../types'
import { AmountButton } from './AmountButton'

type Props = {
  className?: string
  addProductToCart: (product: Product) => void
  decrementAmount: (productId: string) => void
  deleteProduct: (productId: string) => void
} & Product

export const CartItem = ({
  className,
  addProductToCart,
  decrementAmount,
  deleteProduct,
  ...product
}: Props) => {
  const handleAddProductToCart = useCallback(() => {
    const newProduct = {
      ...product,
      price: Number(product.price),
      amount: 1,
    }

    addProductToCart(newProduct)
  }, [addProductToCart, product])

  const handleDecrementAmount = useCallback(() => {
    decrementAmount(product.id)
  }, [product.id, decrementAmount])

  return (
    <div
      className={`flex gap-5 flex-col items-center sm:flex-row sm:items-start lg:justify-between ${className}`}
    >
      <div className="flex gap-5 flex-col items-center sm:flex-row">
        <img src="/coffee.svg" alt="" className="w-16" />
        <div>
          <h4 className="text-black-500">{product.name}</h4>
          <footer className="flex items-center gap-2 mt-2">
            <AmountButton
              onPlusClick={handleAddProductToCart}
              onMinusClick={handleDecrementAmount}
              amount={product.amount}
            />
            <button
              className="flex items-center cursor-pointer px-2 py-1.5 gap-1 bg-gray-200 rounded-md"
              onClick={() => deleteProduct(product.id)}
            >
              <Trash color="#21A756" />
              <span className="text-black-200 uppercase">Remove</span>
            </button>
          </footer>
        </div>
      </div>

      <h4 className="text-black-200 font-bold">R$ {product.price}</h4>
    </div>
  )
}
