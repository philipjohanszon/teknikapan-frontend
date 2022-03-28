import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/navbar'
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  )
}

export default MyApp
