import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from "../components/Slider"
import dynamic from 'next/dynamic'

const profile = {
  email: 'premsahni0501@gmail.com',
  name: 'Prem chand',
  avatar: ''
}
const Home = () => {
  const ImageEditorUI = dynamic(() => import('../components/ImageEditor'), { ssr: false })
  return (
    <div className="container-fluid content-wrapper">
      <div className="container py-3 border-radius-3">
        <Head>
          <title>e-Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header profile={profile} />
        <main className="container px-0 py-3 bg-white">
          <Slider />
          <ImageEditorUI />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
