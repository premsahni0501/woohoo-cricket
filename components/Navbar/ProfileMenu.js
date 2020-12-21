import Image from 'next/image'
import Dropdown from '../Dropdown'

const ProfileMenu = ({ children, profileData }) => {
  return (
    <Dropdown
      className="ml-3"
      iconComponent={profileData?.avatar && <Image scr={profileData?.avatar}
        height={32}
        width={32} />}
      buttonText={(
        profileData?.name?.charAt(0)
      )}>
      <div className="card border-0">
        <div className="card-body">
          <h6 className="m-0">{profileData?.name}</h6>
          <small className="m-0">{profileData?.email}</small>
        </div>
      </div>
    </Dropdown>
  )
}
export default ProfileMenu