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
  let newsList = []
  try {
    const res = await fetch(`${process.env.HOST}/api/news`)
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
