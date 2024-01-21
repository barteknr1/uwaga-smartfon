import {useState, Suspense} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Spin as Hamburger} from 'hamburger-react'

import NavHome from '../NavHome/NavHome'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'

import css from './SharedLayout.module.css'

const volunteerText = 'Z głębi serca dziękujemy!'

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className={`${css.header} ${isOpen && css['is-open']}`}>
        <NavHome setIsOpen={setIsOpen} />
      </header>
      <NavTablet />
      <div className={css.mobileMenuTrigger}>
        <Hamburger toggle={setIsOpen} toggled={isOpen} />
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
