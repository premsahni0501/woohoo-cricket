import Dropdown from '../Dropdown'
import Image from '../Image'
const ProfileMenu = ({ children }) => {
  return (
    <Dropdown iconComponent={<Image src="/vercel.svg" style={{ height: '1.25rem' }} />} buttonText={(
      <div>
        <h6 className="m-0">
          NAme
        </h6>
        <small className="m-0">Sub title</small>
      </div>
    )}>

    </Dropdown>
  )
}
export default ProfileMenu