import { CartProvider } from '../hooks'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>,
  )
}

export default App
