const ListItem = ({ children }) => {
  return (
    <li className={`list-group-item`}>
      {children}
    </li>
  )
}
export default ListItem