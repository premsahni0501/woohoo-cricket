import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NewsItem from '../../components/NewsList/NewsItem'
const NewsDetails = ({ newsItem }) => {
  return (
    <div className={"container-fluid news-details"}>
      <Head>
        <title>{newsItem?.title || 'News Details'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">
        <NewsItem newsData={newsItem} />
      </main>
      <Footer />
    </div>
  )
}

export default NewsDetails

export const getServerSideProps = async ({ params }) => {
  const protocol = process.env.HOST.includes('localhost') ? 'http://' : 'https://'
  let newsItem = {}
  try {
    const res = await fetch(`${protocol}${process.env.HOST}/api/news/${params.slug}`)
    newsItem = await res.json()
  }
  catch (e) {
    console.log(e)
  }
  return {
    props: {
      newsItem
    },
  }
} 
