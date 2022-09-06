import Link from 'next/link'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ButtonIcon } from './ButtonIcon'

export const Header = () => {
  return (
    <header className="flex w-full items-center py-8 justify-between">
      <img src="/logo.svg" alt="logo" />

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-primary-200 p-2 rounded-md gap-1">
          <MapPin color="#21A756" weight="fill" size={24} />
          <span className="text-primary-800 text-sm">Porto Alegre, RS</span>
        </div>

        <Link href="/cart">
          <a>
            <ButtonIcon>
              <ShoppingCart color="#C47F17" size={24} weight="fill" />
            </ButtonIcon>
          </a>
        </Link>
      </div>
    </header>
  )
}
