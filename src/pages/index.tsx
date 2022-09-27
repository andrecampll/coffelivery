import { GetServerSideProps } from 'next'
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from '../graphql/generated/ssr'
import { withApollo } from '../lib/apollo/withApollo'

import { PublicLayout } from '../layouts'

import { HomeTemplate } from '../templates'

function Home(props) {
  return (
    <PublicLayout>
      <title>Coffelivery</title>
      <HomeTemplate products={props?.products} />
    </PublicLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    props: {
      data: { products },
    },
  } = await getServerPageGetProducts({}, ctx)

  return {
    props: {
      products,
    },
  }
}

export default withApollo(ssrGetProducts.withPage()(Home))
