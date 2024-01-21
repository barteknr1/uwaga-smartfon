import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import navigationRoutes from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './NavHome.module.css'

const NavHome = ({setIsOpen}) => {
  const location = useLocation()

  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

  const {routes, landingPageRoutes} = navigationRoutes
  
  const currentRoutes =
    location.pathname === '/landing-page' ? landingPageRoutes : routes

  return (
    <div className={css.nav}>
      <NavLink to="/landing-page" onClick={handleNavLinkClick}>
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {currentRoutes.map(({href, title}) => (
          <NavLink
            key={title}
            className={css.navItem}
            to={href}
            onClick={handleNavLinkClick}
          >
            {title}
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

NavHome.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
}

export default NavHome
