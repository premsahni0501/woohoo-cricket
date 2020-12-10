const List = ({ children, flush = true }) => {
  return (
    <ul className={`list-group${flush ? ' list-group-flush' : ''}`}>
      {children}
    </ul>
  )
}
export default List