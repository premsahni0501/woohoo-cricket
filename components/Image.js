const Image = ({ src, alt, ...props }) => {
  return (
    <img src={src} style={{ minHeight: '1.25rem' }} onError={e => {
      e.target.src = '/vercel.svg'
      e.target.style.height = '1.25rem'
    }} {...props} alt={alt ? alt : 'img'} />
  )
}
export default Image