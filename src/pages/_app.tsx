import { ApolloProvider } from '@apollo/client'
import { CartProvider } from '../hooks'
import { useApollo } from '../lib/apollo'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState)

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ApolloProvider client={client}>
      <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    </ApolloProvider>
  )
}

export default App
