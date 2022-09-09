import { Button } from './Button'
import { CartItem } from './CartItem'

export const CartContainer = () => (
  <main className="bg-white-300 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md p-10 divide-y divide-gray-200">
    <CartItem className="py-6" />
    <CartItem className="py-6" />

    <footer className="border-t-gray-200 pt-6">
      <div className="flex items-center justify-between mb-3 text-black-200">
        <span>Total items</span>
        <span>R$ 29,70</span>
      </div>

      <div className="flex items-center justify-between mb-3 text-black-200">
        <span>Deliver</span>
        <span>R$ 29,70</span>
      </div>

      <div className="flex items-center justify-between mt-3 mb-6 font-bold text-black-500 text-xl">
        <span>Total</span>
        <span>R$ 29,70</span>
      </div>

      <Button>Confirm Order</Button>
    </footer>
  </main>
)
