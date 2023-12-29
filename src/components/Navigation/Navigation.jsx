import React from 'react'
import {Link} from 'react-router-dom'
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link to="/">Strona główna</Link>
      <Link to="volunteering">Wolontariat</Link>
    </nav>
  )
}

export default Navigation
