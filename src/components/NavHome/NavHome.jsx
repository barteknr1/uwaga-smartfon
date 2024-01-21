import {NavLink} from 'react-router-dom'

import Button from '../Button/Button'
import {routes} from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './NavHome.module.css'

const NavHome = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/landing-page">
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {routes.map((route) => {
          const {href, title} = route
          return (
            <NavLink key={title} className={css.navItem} to={href}>
              {title}
            </NavLink>
          )
        })}
        <Button variant="support" content="Wesprzyj"></Button>
      </nav>
      <div className={css.navLang}>
        <button className={css.navLangBtn}>PL</button>
        <span className={css.navLangSpan}>|</span>{' '}
        <button className={css.navLangBtn}>ENG</button>
      </div>
    </div>
  )
}

export default NavHome
