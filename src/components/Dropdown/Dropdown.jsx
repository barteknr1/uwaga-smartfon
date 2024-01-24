import {useState} from 'react'
import {NavLink} from 'react-router-dom'

import navigationRoutes from '../NavHome/index'

import icon from '../../assets/svg/sprite.svg'
import css from './Dropdown.module.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

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
          <NavLink key={elItem.title} to={elItem.elHref}>
            <li className={css.dropdownListItem}>{elItem.elTitle}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
