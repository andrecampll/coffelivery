import { useCart } from '../hooks'
import { Button } from './Button'
import { CartItem } from './CartItem'

export const CartContainer = () => {
  const {
    products,
    addProductToCart,
    decrementAmount,
    subtotalPrice,
    totalPrice,
    deleteProduct,
  } = useCart()

  console.log('products', products)

  return (
    <main className="bg-white-300 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md p-10 divide-y divide-gray-200">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <CartItem
              key={product.id}
              className="py-6"
              {...product}
              addProductToCart={addProductToCart}
              decrementAmount={decrementAmount}
              deleteProduct={deleteProduct}
            />
          ))}

          <footer className="border-t-gray-200 pt-6">
            <div className="flex items-center justify-between mb-3 text-black-200">
              <span>Total items</span>
              <span>R$ {subtotalPrice.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between mb-3 text-black-200">
              <span>Deliver</span>
              <span>R$ 3,70</span>
            </div>

            <div className="flex items-center justify-between mt-3 mb-6 font-bold text-black-500 text-xl">
              <span>Total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>

            <Button>Confirm Order</Button>
          </footer>
        </>
      ) : (
        <p>No products</p>
      )}
    </main>
  )
}
