import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import Support from '../Support/Support'

import icon from '../../assets/svg/sprite.svg'
import css from './NavTablet.module.css'

const NavTablet = () => {
  const {t} = useTranslation()

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
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
