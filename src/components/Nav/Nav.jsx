//@ts-nocheck
import {useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'

import navigationRoutes from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './Nav.module.css'

const Nav = ({setNavIsOpen}) => {
  const [isDropOpen, setDropIsOpen] = useState(false)

  const location = useLocation()

  const {routes, landingPageRoutes} = navigationRoutes
  const currentRoutes =
    location.pathname === '/landing-page' ? landingPageRoutes : routes

  const handleNavLinkClick = () => {
    setNavIsOpen(false)
    setDropIsOpen(false)
  }

  const handleDropdownToggle = () => {
    setDropIsOpen(!isDropOpen)
  }

  return (
    <div className={css.nav}>
      <NavLink to="/landing-page">
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {currentRoutes.map(({href, title, el}) => (
          <NavLink
            key={title}
            className={css.navItem}
            to={href}
            onClick={() => {
              if (el) {
                handleDropdownToggle()
              } else {
                handleNavLinkClick()
              }
            }}
          >
            {title}
            {el && (
              <div className={css.dropdown}>
                <svg className={css.dropdownIcon}>
                  <use href={`${icon}#dropdown`}></use>
                </svg>
                <ul
                  className={css.dropdownList}
                  style={{display: isDropOpen ? 'block' : 'none'}}
                >
                  <Dropdown
                    setNavIsOpen={setNavIsOpen}
                    setDropIsOpen={setDropIsOpen}
                  />
                </ul>
              </div>
            )}
          </NavLink>
        ))}
        <Button variant="support" content="Wesprzyj" />
      </nav>

      <div className={css.navLang}>
        <button className={css.navLangBtn}>PL</button>
        <span className={css.navLangSpan}>|</span>
        <button className={css.navLangBtn}>ENG</button>
      </div>
    </div>
  )
}

Nav.propTypes = {
  setNavIsOpen: PropTypes.func,
}

export default Nav
