import NewsItem from "./NewsItem"

const NewsList = ({ newsList }) => {
  if (!newsList) {
    return null
  }
  return (
    <div className="row">
      {
        newsList.map((news, index) => (
          <div className={`col col-12${news.featured ? '' : ' col-md-3'} mb-3`} key={'news_' + index} >
            <NewsItem newsData={news} />
          </div>
        ))
      }
    </div>
  )
}
export default NewsList