import {Outlet, useLocation} from 'react-router-dom'
import {Suspense, useState, useEffect} from 'react'

import HomeNav from '../HomeNav/HomeNav'
import Footer from '../Footer/Footer'

import css from './SharedLayout.module.css'
import icon from '../../assets/svg/sprite.svg'

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {}, [location])

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  const volunteerText = 'Z głębi serca dziękujemy!'

  return (
    <>
      <header className={`${css.header} ${isOpen && css['is-open']}`}>
        <HomeNav />
      </header>
      <svg className={css.mobileMenuTrigger} onClick={toggleMenu}>
        <use href={`${icon}#hamburger-menu`}></use>
      </svg>
      <main className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer
        text={
          location.pathname.includes('/volunteering')
            ? volunteerText
            : 'Strona została stworzona dzięki pracy Wolontariuszy.'
        }
      />
    </>
  )
}

export default SharedLayout
