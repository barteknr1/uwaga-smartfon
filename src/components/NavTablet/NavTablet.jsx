import {NavLink} from 'react-router-dom'

import Support from '../Support/Support'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

import icon from '../../assets/svg/sprite.svg'
import css from './NavTablet.module.css'

const NavTablet = () => {
  return (
    <div className={css.navTabletFixed}>
      <div className={css.navTablet}>
        <NavLink to="/" onClick={() => ScrollToTop()}>
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
