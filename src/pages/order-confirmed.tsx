import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { PublicLayout } from '../layouts'
import { OrderConfirmedTemplate } from '../templates'

export default function OrderConfirmed() {
  return <OrderConfirmedTemplate />
}

OrderConfirmed.getLayout = function getLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
