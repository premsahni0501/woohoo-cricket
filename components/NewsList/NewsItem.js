import Link from 'next/link'
import Image from '../Image'

const NewsItem = ({ newsData: { title, news_link, img_path, author, featured,
  meta_date, author_link, author_img_path, details } }) => {
  const render = () => (
    <div className={`card news-card h-100${featured ? ' featured' : ''}`}>
      {
        img_path && <Image src={img_path} className="card-img-top" alt={title} />
      }
      <div className="card-body">
        {
          !author_link ? (
            <p className="card-text m-0">
              <small>{author}</small>
            </p>
          )
            : (
              <Link href={author_link}>
                <div className="d-flex align-items-center flex-direction-row">
                  <Image src={author_img_path} style={{ height: '2rem', borderRadius: '1rem' }} />
                  <p className="card-text mx-2 my-0">{author}</p>
                </div>
              </Link>
            )
        }
        {
          news_link ? (

            <h6 className="card-title">{title}</h6>
          )
            : (

              <h3 className="card-title">{title}</h3>
            )
        }
        <p className="m-0">
          <small>{meta_date}</small>
        </p>
        {
          news_link && (
            <Link href={news_link}>
              <button className="btn btn-link px-0 btn-sm">Read more</button>
            </Link>
          )
        }
        {
          details && details.map((d, i) => (
            <p key={`para_${i}`}>{d}</p>
          ))
        }
      </div>
    </div>
  )
  if (!news_link) {
    return render()
  }
  return (
    <Link href={news_link || ''}>
      {render()}
    </Link>
  )
}
export default NewsItem