import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from "../components/Slider"

const Home = () => {
  return (
    <div className="container-fluid content-wrapper">
      <div className="container py-3 border-radius-3">
        <Head>
          <title>e-Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="container px-0 py-3 bg-white">
          <Slider />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
