//@ts-nocheck
import {useState, useEffect, useRef} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'

import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'

import navigationRoutes from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './Nav.module.css'

const Nav = ({setNavIsOpen}) => {
  const [isDropOpen, setDropIsOpen] = useState(false)
  const {i18n, t} = useTranslation()
  const [language, setLanguage] = useState('en')
  const containerRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropOpen && !containerRef.current.contains(event.target)) {
        setDropIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isDropOpen])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

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
      <NavLink to="/">
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {currentRoutes.map(({href, title, el}) => (
          <div className={css.navDrop} key={title}>
            {el ? (
              <div className={css.navItem} onClick={handleDropdownToggle}>
                {title}
                <div ref={containerRef} className={css.dropdown}>
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
              </div>
            ) : (
              <NavLink
                className={css.navItem}
                to={href}
                onClick={handleNavLinkClick}
              >
                {title}
              </NavLink>
            )}
          </div>
        ))}
        <Button variant="support" content="Wesprzyj" />
      </nav>
      <div className={css.navLang}>
        <button onClick={() => changeLanguage('pl')} className={css.navLangBtn}>
          PL
        </button>
        <span className={css.navLangSpan}>|</span>{' '}
        <button onClick={() => changeLanguage('en')} className={css.navLangBtn}>
          ENG
        </button>
      </div>
    </div>
  )
}

Nav.propTypes = {
  setNavIsOpen: PropTypes.func.isRequired,
}

export default Nav
