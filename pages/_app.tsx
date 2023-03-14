import Navigation from '../components/navigation/navigation'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Navigation></Navigation>
  <Component {...pageProps} />
  </>
  
  
  )
}

export default MyApp
