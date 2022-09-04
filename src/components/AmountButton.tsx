import { Minus, Plus } from 'phosphor-react'

export const AmountButton = () => (
  <div className="flex items-center px-2 py-1.5 gap-2 bg-gray-200 rounded-md">
    <div className="cursor-pointer">
      <Minus color="#21A756" />
    </div>
    <span className="text-md cursor-default select-none">1</span>
    <div className="cursor-pointer">
      <Plus color="#21A756" />
    </div>
  </div>
)
