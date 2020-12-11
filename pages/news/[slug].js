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
  const res = await fetch(`${process.env.HOST + ':' + process.env.PORT}/api/news/${params.slug}`)
  const data = await res.json()
  return {
    props: {
      newsItem: data || []
    },
  }
} 
