import { MapPinLine } from 'phosphor-react'
import { Input } from './Input'

export const DeliveryForm = () => (
  <div>
    <h1 className="text-lg text-black-500 font-bold mb-4">Finish your order</h1>

    <form className="bg-white-300 p-10 rounded">
      <header className="flex gap-2 mb-8">
        <MapPinLine color="#C47F17" size={22} />
        <div>
          <h3 className="text-black-500">Delivery Address</h3>
          <span className="text-black-200">
            Enter the address where you want to receive your order
          </span>
        </div>
      </header>

      <Input placeholder="CEP" />
      <Input placeholder="Address" className="w-full mt-4" />

      <div className="my-4 flex gap-4">
        <Input placeholder="Number" type="number" className="w-1/2 md:w-1/3" />
        <Input placeholder="Address" className="w-full" />
      </div>

      <div className="my-4 flex flex-col md:flex-row gap-4">
        <Input placeholder="District" className="w-full md:w-1/2" />
        <Input placeholder="City" className="w-full" />
        <Input placeholder="State" className="w-full md:w-1/3" />
      </div>
    </form>
  </div>
)
