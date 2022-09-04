import { MapPinLine } from 'phosphor-react'

export const DeliveryForm = () => (
  <div>
    <h1 className="text-lg text-black-500 font-bold mb-4">Finish your order</h1>

    <form className="bg-white-300 p-10">
      <header className="flex gap-2">
        <MapPinLine color="#C47F17" size={22} />
        <div>
          <h3 className="text-black-500">Delivery Address</h3>
          <span className="text-black-200">
            Enter the address where you want to receive your order
          </span>
        </div>
      </header>
    </form>
  </div>
)
