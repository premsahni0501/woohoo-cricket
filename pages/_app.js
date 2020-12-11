import Loader from '../components/Loader'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Loader />
    </>
  )
}

export default MyApp
