import { Cart, DeliveryForm } from '../components'

export const CartTemplate = () => (
  <main className="flex mb-8 gap-8 flex-col lg:flex-row">
    <DeliveryForm />
    <Cart />
  </main>
)
