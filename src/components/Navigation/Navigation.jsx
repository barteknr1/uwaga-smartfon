import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../Button/Button'

import icon from '../../assets/images/vectors/icons.svg'
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={css.Nav}>
      <Link to="/">
        <svg className={css.Nav__Logo}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </Link>
      <nav className={css.Nav__List}>
        <Link className={css.Nav__Item} to="/">
          O konferencji
        </Link>
        <Link className={css.Nav__Item} to="/">
          Edycje
        </Link>
        <Link className={css.Nav__Item} to="volunteering">
          Wolontariat
        </Link>
        <Link className={css.Nav__Item} to="/">
          Newsletter
        </Link>
        <Link className={css.Nav__Item} to="/">
          Partnerzy i Patroni
        </Link>
        <Button variant="support" content="Wesprzyj"></Button>
      </nav>
    </div>
  )
}

export default Navigation
