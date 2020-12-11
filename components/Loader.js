import { useEffect, useState } from 'react'
import Router from 'next/router'

const Loader = () => {
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  Router.events.on('routeChangeError', () => setLoading(false))

  useEffect(() => {
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true))
      Router.events.off('routeChangeComplete', () => setLoading(true))
      Router.events.off('routeChangeError', () => setLoading(true))
    }
  }, [])
  return (
    <div className={`loading${loading ? ' show' : ' hide'}`}></div>
  )
}
export default Loader