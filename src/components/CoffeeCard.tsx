import { ShoppingCart } from 'phosphor-react'
import { ButtonIcon } from './ButtonIcon'

type Props = {
  name: string
  description: string
  imageUrl: string
  price: string
}

export const CoffeeCard = ({ name, description, imageUrl, price }: Props) => (
  <div className="bg-white-300 flex flex-col items-center px-6 py-5 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md max-h-80">
    <img src={imageUrl} alt="" className="relative bottom-10 -mb-6" />
    <span className="mb-4 bg-secondary-200 rounded-full text-secondary-800 px-2 py-1 font-bold uppercase text-xs">
      Traditional
    </span>
    <h3 className="text-lg font-bold text-black-500">{name}</h3>
    <p className="text-gray-800 text-center text-sm">{description}</p>

    <footer className="w-full flex mt-8 items-center justify-between">
      <span>$ {price}</span>

      <div className="flex items-center gap-2">
        <div>1</div>

        <ButtonIcon kind="secondary">
          <ShoppingCart color="#fff" weight="fill" />
        </ButtonIcon>
      </div>
    </footer>
  </div>
)
