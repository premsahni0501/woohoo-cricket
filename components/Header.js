import SearchBar from "./Navbar/SearchBar"
import Notification from "./Navbar/Notification"
import ProfileMenu from "./Navbar/ProfileMenu"
import Link from "next/link"

const Header = ({ profile }) => {
  return (
    <nav className="navbar bg-danger fixed-top">
      <div className="container">
        <Link href="/news">
          <span className="navbar-brand">
            <h3 className="m-0 text-light">
              WooHoo<em>!</em>Cricket
            </h3>
            <small className="text-light">News</small>
          </span>
        </Link>
        <SearchBar />
        {
          profile && (
            <div className="d-inline-flex align-items-center">
              <Notification />
              <ProfileMenu />
            </div>
          )
        }
      </div>
    </nav>
  )
}
export default Header