import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NewsList from '../../components/NewsList'
import styles from '../../styles/Home.module.scss'

const Home = ({ newsList }) => {
  return (
    <div className={"container-fluid " + styles.homeContainer}>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">
        <NewsList newsList={newsList} />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const protocol = process.env.VERCEL_URL.includes('localhost') ? 'http://' : 'https://'
  console.log(`${protocol}${process.env.VERCEL_URL}`)
  let newsList = []
  try {
    const res = await fetch(`${protocol}${process.env.VERCEL_URL}/api/news`)
    newsList = await res.json()
  }
  catch (e) {
    console.log(e)
  }
  return {
    props: {
      newsList
    },
    revalidate: 60
  }
} 
