import {NavLink} from 'react-router-dom'

import Button from '../Button/Button'

import icon from '../../assets/svg/sprite.svg'
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/">
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </NavLink>
      <nav className={css.navList}>
        <NavLink className={css.navItem} to="/">
          O konferencji
        </NavLink>
        <NavLink className={css.navItem} to="/">
          Edycje
          <svg className={css.navItemIcon}>
            <use href={`${icon}#dropdown`}></use>
          </svg>
        </NavLink>
        <NavLink className={css.navItem} to="volunteering">
          Wolontariat
        </NavLink>
        <NavLink className={css.navItem} to="/">
          Newsletter
        </NavLink>
        <NavLink className={css.navItem} to="/">
          Partnerzy i Patroni
        </NavLink>
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

export default Navigation
