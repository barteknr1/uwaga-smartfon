import {useRef} from 'react'
import {NavLink} from 'react-router-dom'
import {useClickAway} from 'react-use'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import {routes} from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './NavHome.module.css'

const NavHome = ({setIsOpen}) => {
  const ref = useRef(null)
  useClickAway(ref, () => setIsOpen(false))

  const handleNavLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div ref={ref} className={css.nav}>
      <NavLink to="/landing-page" onClick={handleNavLinkClick}>
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {routes.map(({href, title}) => (
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
