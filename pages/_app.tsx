import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationComponent from '../components/navigation/NavigationComponent'
import FooterComponent from '../components/footer/FooterComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <NavigationComponent/>
    <Component {...pageProps} />
    <FooterComponent />
  </>)
}

export default MyApp
