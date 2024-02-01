import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import navigationRoutes from '../Nav/index'

import icon from '../../assets/svg/sprite.svg'
import css from './Dropdown.module.css'

const Dropdown = ({setNavIsOpen, setDropIsOpen}) => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleDropdownLinkClick = () => {
    setNavIsOpen(false)
    setDropIsOpen(false)
    ScrollToTop()
  }

  const findNestedArray = (array) =>
    array.find((item) => Array.isArray(item.el))?.el || null

  const elNav = findNestedArray(navigationRoutes.routes)

  return elNav.map((elItem) => (
    <NavLink
      key={elItem.elTitle}
      to={elItem.elHref}
      onClick={handleDropdownLinkClick}
    >
      <li className={css.dropdownListItem}>{elItem.elTitle}</li>
    </NavLink>
  ))
}

Dropdown.propTypes = {
  setNavIsOpen: PropTypes.func.isRequired,
  setDropIsOpen: PropTypes.func.isRequired,
}

export default Dropdown
