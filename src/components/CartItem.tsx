import { Trash } from 'phosphor-react'
import { AmountButton } from './AmountButton'

export const CartItem = () => (
  <div className="flex gap-5 flex-col items-center sm:flex-row sm:items-start">
    <div className="flex gap-5 flex-col items-center sm:flex-row">
      <img src="/coffee.svg" alt="" className="w-16" />
      <div>
        <h4 className="text-black-500">Expresso Tradicional</h4>
        <footer className="flex items-center gap-2 mt-2">
          <AmountButton />
          <div className="flex items-center px-2 py-1.5 gap-1 bg-gray-200 rounded-md">
            <Trash color="#21A756" />
            <span className="text-black-200 uppercase">Remove</span>
          </div>
        </footer>
      </div>
    </div>

    <h4 className="text-black-200 font-bold">R$ 9,90</h4>
  </div>
)
