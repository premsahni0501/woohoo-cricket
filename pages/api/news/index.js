import cheerio from 'cheerio'
import axios from 'axios'

export const getNews = (page, loadmore) => {
  return new Promise(async resolve => {
    const url = `https://cricket.yahoo.net/news/page/${page}?loadmore=${loadmore}&id=dab9f7bf-65a9-49cb-90b8-61c0b65ee0d8&extentities=`
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    console.log(res.data)
    const newsItems = []
    $('.article-item').each((index, el) => {
      const news_link = $(el).find('.article-thumbnail > a').attr('href').trim()
      const img_path = $(el).find('.article-thumbnail img').attr('data-src').trim()
      const author = $(el).find('.article-content .meta-author').text().trim()
      const title = $(el).find('.article-content .article-title').text().trim()
      const meta_date = $(el).find('.article-meta .meta-date').text().trim()
      newsItems.push({ news_link, img_path, author, meta_date, title, featured: $(el).hasClass('img-21by9') })
    })
    resolve(newsItems)
  })
}
export default async (req, res) => {
  const data = await getNews(1, true)
  res.json(data)
}
