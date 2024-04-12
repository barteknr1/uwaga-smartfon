import {NavLink} from 'react-router-dom'
import {scrollToTop} from '../Scroll'
import SupportButton from '../Support/SupportButton'
import icon from '../../assets/svg/sprite.svg'
import css from './NavTablet.module.css'

const NavTablet = () => {
  return (
    <div className={css.navTabletFixed}>
      <div className={css.navTablet}>
        <NavLink to="/" onClick={() => scrollToTop()}>
          <svg className={css.navLogo}>
            <use href={`${icon}#logo`}></use>
          </svg>
        </NavLink>
        <SupportButton />
      </div>
    </div>
  )
}

export default NavTablet
