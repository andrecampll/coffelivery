import { CartItem } from './CartItem'

export const Cart = () => (
  <aside className="mt-8 md:mt-0">
    <h1 className="text-lg text-black-500 font-bold mb-4">Finish your order</h1>

    <main className="bg-white-300 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md p-10">
      <CartItem />
    </main>
  </aside>
)
