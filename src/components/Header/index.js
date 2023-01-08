import {useState} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdCancel} from 'react-icons/md'
import './index.css'
import {on} from 'events'

const Header = () => {
  const [displayLinks, setDisplayLinks] = useState(false)

  const onMenuIcon = () => {
    setDisplayLinks(!displayLinks)
  }

  const renderMobMenuView = () => (
    <ul className="menu-list">
      <li>
        <Link to="/" className="mob-home-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/popular" className="mob-popular-link">
          Popular
        </Link>
      </li>
      <li>
        <Link to="/account" className="mob-account-link">
          Account
        </Link>
      </li>
      <li>
        <button type="button" onClick={onMenuIcon}>
          <MdCancel className="cancel-btn" />
        </button>
      </li>
    </ul>
  )
  return (
    <div className="header-bg">
      <ul>
        <li>
          <img
            src="https://ik.imagekit.io/sotwwpdjv/Group_7399.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1671621011929"
            alt="website logo"
            className="logo"
          />
        </li>
        <li>
          <Link className="link" to="/">
            <p className="home-link">Home</p>
          </Link>
        </li>
        <li>
          <Link className="link" to="/popular">
            <p className="popular-link">Popular</p>
          </Link>
        </li>
        <li>
          <Link to="/search" className="link">
            <button type="button">
              <HiOutlineSearch className="search-icon" />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/account">
            <img
              alt="profile"
              className="avatar"
              src="https://ik.imagekit.io/sotwwpdjv/Avatar.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1671624111876"
            />
          </Link>
        </li>
        <li>
          <button type="button" onClick={onMenuIcon}>
            <img
              alt="menu-icon"
              className="menu-icon"
              src="https://ik.imagekit.io/sotwwpdjv/add-to-queue_1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1671628451610"
            />
          </button>
        </li>
      </ul>
      {displayLinks && renderMobMenuView()}
    </div>
  )
}
export default Header
