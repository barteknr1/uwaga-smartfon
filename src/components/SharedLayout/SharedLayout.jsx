import {Outlet} from 'react-router-dom'
import {Suspense, useState} from 'react'
import css from './SharedLayout.module.css'
import icon from '../../assets/images/vectors/icons.svg'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <>
      <header className={`${css.header} ${isOpen && css['is-open']}`}>
        <Navigation />
      </header>
      <svg className={css.mobileMenuTrigger} onClick={toggleMenu}>
        <use href={`${icon}#hamburger-menu`}></use>
      </svg>
      <main className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </>
  )
}

export default SharedLayout
