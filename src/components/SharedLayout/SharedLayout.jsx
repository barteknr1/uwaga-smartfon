import {Outlet, useLocation} from 'react-router-dom'
import {Suspense, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'

import NavHome from '../NavHome/NavHome'
import Footer from '../Footer/Footer'
import HeaderTablet from '../HeaderTablet/HeaderTablet'

import css from './SharedLayout.module.css'
import icon from '../../assets/svg/sprite.svg'

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const controls = useAnimation()

  const toggleMenu = async () => {
    await setIsOpen((open) => !open)
    controls.start({scale: isOpen ? 1 : 0.8})
  }

  const menuIconId = isOpen ? 'icon-close' : 'hamburger-menu'
  const volunteerText = 'Z głębi serca dziękujemy!'

  return (
    <>
      <header className={`${css.header} ${isOpen && css['is-open']}`}>
        <NavHome />
      </header>
      <HeaderTablet />
      <motion.svg
        className={css.mobileMenuTrigger}
        onClick={toggleMenu}
        animate={controls}
        initial={{scale: 1}}
      >
        <use href={`${icon}#${menuIconId}`} />
      </motion.svg>
      <main className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer
        text={
          location.pathname.startsWith('/volunteering')
            ? volunteerText
            : 'Strona została stworzona dzięki pracy Wolontariuszy.'
        }
      />
    </>
  )
}

export default SharedLayout
