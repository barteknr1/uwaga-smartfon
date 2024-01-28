import {NavLink} from 'react-router-dom'

import Button from '../Button/Button'

import icon from '../../assets/svg/sprite.svg'
import css from './NavTablet.module.css'

const NavTablet = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className={css.navTabletFixed}>
      <div className={css.navTablet}>
        <NavLink to="/landing-page" onClick={() => scrollToTop()}>
          <svg className={css.navLogo}>
            <use href={`${icon}#logo`}></use>
          </svg>
        </NavLink>
        <Button variant="support" content="Wesprzyj" />
      </div>
    </div>
  )
}

export default NavTablet
