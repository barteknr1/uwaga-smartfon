import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../Button/Button'

import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={css.Nav}>
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
  )
}

export default Navigation
