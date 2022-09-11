import { Minus, Plus } from 'phosphor-react'

type Props = {
  amount?: number
  onMinusClick: () => void
  onPlusClick: () => void
}

export const AmountButton = ({ amount, onMinusClick, onPlusClick }: Props) => (
  <div className="flex items-center px-2 py-1.5 gap-2 bg-gray-200 rounded-md">
    <div
      className={`${amount > 0 && 'cursor-pointer opacity-100'} opacity-50`}
      onClick={onMinusClick}
    >
      <Minus color="#21A756" />
    </div>
    <span className="text-md cursor-default select-none">{amount || 0}</span>
    <div className="cursor-pointer" onClick={onPlusClick}>
      <Plus color="#21A756" />
    </div>
  </div>
)
