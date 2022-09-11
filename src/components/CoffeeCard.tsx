import { ShoppingCart } from 'phosphor-react'
import { useCallback, useMemo } from 'react'
import { useCart } from '../hooks'
import { AmountButton } from './AmountButton'
import { ButtonIcon } from './ButtonIcon'

type Props = {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  category: string | string[]
}

export const CoffeeCard = ({ ...props }: Props) => {
  const { addProductToCart, getProductAmount, decrementAmount } = useCart()

  const handleAddProductToCart = useCallback(() => {
    const newProduct = {
      ...props,
      price: Number(props.price),
      amount: 1,
    }

    addProductToCart(newProduct)
  }, [addProductToCart, props])

  const amount = useMemo(
    () => getProductAmount(props.id),
    [getProductAmount, props.id],
  )

  const handleDecrementAmount = useCallback(() => {
    if (!amount) return

    decrementAmount(props.id)
  }, [props.id, decrementAmount, amount])

  return (
    <div className="bg-white-300 flex flex-col items-center px-6 py-5 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md max-h-80">
      <img src={props.imageUrl} alt="" className="relative bottom-10 -mb-6" />
      <div className="flex items-center gap-2">
        {typeof props.category === 'object' ? (
          props.category.map((item) => (
            <span
              key={item}
              className="mb-4 bg-secondary-200 rounded-full text-secondary-800 px-2 py-1 font-bold uppercase text-xs"
            >
              {item}
            </span>
          ))
        ) : (
          <span className="mb-4 bg-secondary-200 rounded-full text-secondary-800 px-2 py-1 font-bold uppercase text-xs">
            {props.category}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-black-500">{props.name}</h3>
      <p className="text-gray-800 text-center text-sm">{props.description}</p>

      <footer className="w-full flex mt-8 items-center justify-between">
        <span className="text-black-200 text-sm">
          R$ <strong className="text-2xl">{props.price}</strong>
        </span>

        <div className="flex items-center gap-2">
          <AmountButton
            amount={amount}
            onMinusClick={handleDecrementAmount}
            onPlusClick={handleAddProductToCart}
          />

          <ButtonIcon kind="secondary" onClick={handleAddProductToCart}>
            <ShoppingCart size={20} color="#fff" weight="fill" />
          </ButtonIcon>
        </div>
      </footer>
    </div>
  )
}
