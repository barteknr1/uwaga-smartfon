import {Outlet, useLocation} from 'react-router-dom'
import {Suspense, useState} from 'react'
import {Spin as Hamburger} from 'hamburger-react'

import NavHome from '../NavHome/NavHome'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'

import css from './SharedLayout.module.css'

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const volunteerText = 'Z głębi serca dziękujemy!'

  return (
    <>
      <header className={`${css.header} ${isOpen && css['is-open']}`}>
        <NavHome />
      </header>
      <NavTablet />
      <div className={css.mobileMenuTrigger}>
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
      </div>
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
