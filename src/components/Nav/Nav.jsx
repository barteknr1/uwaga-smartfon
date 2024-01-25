import {NavLink, useLocation} from 'react-router-dom'

import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'

import navigationRoutes from './index'

import icon from '../../assets/svg/sprite.svg'
import css from './Nav.module.css'

const Nav = () => {
  const location = useLocation()

  const {routes, landingPageRoutes} = navigationRoutes
  const currentRoutes =
    location.pathname === '/landing-page' ? landingPageRoutes : routes

  return (
    <div className={css.nav}>
      <NavLink to="/landing-page">
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        {currentRoutes.map(
          // @ts-ignore
          ({href, title, el}) => (
            <NavLink key={title} className={css.navItem} to={href}>
              {title}
              {el && <Dropdown />}
            </NavLink>
          )
        )}
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

export default Nav
