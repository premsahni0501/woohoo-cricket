import SearchBar from "./Navbar/SearchBar"
import Notification from "./Navbar/Notification"
import ProfileMenu from "./Navbar/ProfileMenu"
import Link from "next/link"
import Image from "next/image"
import Login from "./Login"
import Cart from "./Cart"

const Header = ({ profile }) => {
  return (
    <nav className="navbar fixed-top custom-navbar">
      <div className="container">
        <Link href="/news">
          <span className="navbar-brand">
            <Image src="/vercel.svg" layout="intrinsic" height={32} width={100} />
          </span>
        </Link>
        <SearchBar />
        <div className="d-flex align-items-center">
          {
            profile ? (
              <div className="d-inline-flex align-items-center">
                <Notification />
                <ProfileMenu />
              </div>
            )
              :
              <Login />
          }
          <Cart />
        </div>
      </div>
    </nav>
  )
}
export default Header