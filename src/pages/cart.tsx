import { ReactNode } from 'react'
import { PublicLayout } from '../layouts'
import { CartTemplate } from '../templates'

export default function Cart() {
  return <CartTemplate />
}

Cart.getLayout = function getLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}
