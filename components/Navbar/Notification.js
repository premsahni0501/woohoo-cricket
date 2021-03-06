import Dropdown from '../Dropdown'
import { FiBell } from 'react-icons/fi'
import List from '../List'
import ListItem from '../ListItem'

const Notification = () => {
  return (
    <Dropdown iconComponent={<FiBell />}>
      <List>
        <ListItem>List 1</ListItem>
      </List>
    </Dropdown>
  )
}
export default Notification