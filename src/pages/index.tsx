import { ReactNode } from 'react'
import { PublicLayout } from '../layouts'
import { HomeTemplate } from '../templates'

export default function Home() {
  return <HomeTemplate />
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}
