import {NavLink} from 'react-router-dom'

import Button from '../Button/Button'
import {routes} from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './NavHome.module.css'

import {useState} from 'react'
import {useTranslation} from 'react-i18next'

// import i18n from '../../i18n'

const NavHome = () => {
  const {i18n, t} = useTranslation()

  const [language, setLanguage] = useState('en')

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className={css.nav}>
      <NavLink to="/landing-page" onClick={() => scrollToTop()}>
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {routes.map((route) => {
          const {href, title} = route
          return (
            <NavLink key={title} className={css.navItem} to={href} onClick={() => scrollToTop()}>
              {title}
            </NavLink>
          )
        })}
        <Button variant="support" content="Wesprzyj"></Button>
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

export default NavHome
