import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../Button/Button'

import icon from '../../assets/images/vectors/icons.svg'
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={css.nav}>
      <Link to="/">
        <svg className={css.navLogo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </Link>
      <nav className={css.navList}>
        <Link className={css.navItem} to="/">
          O konferencji
        </Link>
        <Link className={css.navItem} to="/">
          Edycje
          <svg className={css.navItemIcon}>
            <use href={`${icon}#dropdown`}></use>
          </svg>
        </Link>
        <Link className={css.navItem} to="volunteering">
          Wolontariat
        </Link>
        <Link className={css.navItem} to="/">
          Newsletter
        </Link>
        <Link className={css.navItem} to="/">
          Partnerzy i Patroni
        </Link>
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
