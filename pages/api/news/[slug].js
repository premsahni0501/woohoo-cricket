import axios from 'axios'
import cheerio from 'cheerio'

const getNewsDetails = slug => {
  return new Promise(async resolve => {
    const url = `https://cricket.yahoo.net/news/${slug}`
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    const articleDetailsEl = $('.article-detail')
    const author_link = articleDetailsEl.find('.article-detail-byline a')?.attr('href')?.trim()
    const author_img_path = 'https://cricket.yahoo.net' + articleDetailsEl.find('.article-detail-byline img')?.attr('src')?.trim()
    const title = articleDetailsEl.find('.article-head > h1')?.text()?.trim()
    const meta_date = articleDetailsEl.find('.article-head .meta-date')?.text()?.trim()
    const img_path = articleDetailsEl.find('.article-body img')?.attr('data-src')?.trim()
    const author = articleDetailsEl.find('.article-head .meta-author')?.text()?.trim()
    const details = []
    articleDetailsEl.find('.article-body > p').each((ind, el) => {
      details.push($(el).text().trim())
    })
    const newsData = { author_link, author_img_path, img_path, author, meta_date, title, details, news_link: '' }
    resolve({ ...newsData })
  })
}

export default async (req, res) => {
  const {
    query: { slug }
  } = req
  const data = await getNewsDetails(slug)
  res.json(data)
}