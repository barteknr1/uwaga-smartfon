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
  const [, setLanguage] = useState('en')
  const containerRef = useRef(null)
  const location = useLocation()

  const {routes, landingPageRoutes, volunteeringPageRoutes} = navigationRoutes
  const currentRoutes =
    location.pathname === '/landing-page'
      ? landingPageRoutes
      : location.pathname === '/volunteering'
      ? volunteeringPageRoutes
      : routes

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  const handleNavLinkClick = () => {
    setNavIsOpen(false)
    setDropIsOpen(false)
  }

  const handleDropdownToggle = () => {
    setDropIsOpen(!isDropOpen)
  }

  const scrollToAnchor = (anchorId) => {
    if (!anchorId) return
    const anchorElement = document.getElementById(anchorId)
    if (anchorElement) {
      setTimeout(() => {
        anchorElement.scrollIntoView({behavior: 'smooth'})
      }, 200)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isDropOpen])

  return (
    <div className={css.nav}>
      <NavLink to="/" onClick={() => scrollToTop()}>
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {currentRoutes.map(({href, title, el}) =>
          el ? (
            <div className={css.navDrop} key={title}>
              <div className={css.navItem} onClick={handleDropdownToggle}>
                {t(`${title}`)}
                <div ref={containerRef} className={css.dropdown}>
                  <svg className={css.dropdownIcon}>
                    <use href={`${icon}#dropdown`}></use>
                  </svg>
                  <ul
                    className={
                      isDropOpen ? css.dropdownList : css.dropdownListIsOpen
                    }
                  >
                    <Dropdown
                      setNavIsOpen={setNavIsOpen}
                      setDropIsOpen={setDropIsOpen}
                    />
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              key={title}
              className={css.navItem}
              to={href}
              onClick={() => {
                handleNavLinkClick()
                scrollToAnchor(href.substring(1))
              }}
            >
              {t(`${title}`)}
            </NavLink>
          )
        )}
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
