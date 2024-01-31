import {NavLink} from 'react-router-dom'
import icon from '../../assets/svg/sprite.svg'
import css from './NavTablet.module.css'
import Support from '../Support/Support'

const NavTablet = () => {
  return (
    <div className={css.navTabletFixed}>
      <div className={css.navTablet}>
        <NavLink to="/">
          <svg className={css.navLogo}>
            <use href={`${icon}#logo`}></use>
          </svg>
        </NavLink>
        <Support />
      </div>
    </div>
  )
}

export default NavTablet
