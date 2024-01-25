import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import navigationRoutes from '../Nav/index'

import icon from '../../assets/svg/sprite.svg'
import css from './Dropdown.module.css'

const Dropdown = ({setNavIsOpen}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdownLinkClick = () => {
    setNavIsOpen(false)
  }

  const findNestedArray = (array) =>
    array.find((item) => Array.isArray(item.el))?.el || null

  const elNav = findNestedArray(navigationRoutes.routes)

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={css.dropdown}>
      <svg className={css.dropdownIcon} onClick={handleDropdownToggle}>
        <use href={`${icon}#dropdown`} className={css.icon}></use>
      </svg>
      <ul
        className={css.dropdownList}
        style={{display: isOpen ? 'block' : 'none'}}
      >
        {elNav.map((elItem) => (
          <NavLink
            key={elItem.elTitle}
            to={elItem.elHref}
            onClick={handleDropdownLinkClick}
          >
            <li className={css.dropdownListItem}>{elItem.elTitle}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  setNavIsOpen: PropTypes.func,
}

export default Dropdown
