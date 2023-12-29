import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../Button/Button'

import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link to="/">O konferencji</Link>
      <Link to="/">Edycje</Link>
      <Link to="volunteering">Wolontariat</Link>
      <Link to="/">Newsletter</Link>
      <Link to="/">Partnerzy i Patroni</Link>
      <Button variant="support" content="Wesprzyj"></Button>
    </nav>
  )
}

export default Navigation
