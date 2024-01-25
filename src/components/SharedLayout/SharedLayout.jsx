import {useState, Suspense} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Spin as Hamburger} from 'hamburger-react'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'

import css from './SharedLayout.module.css'

const volunteerText = 'Z głębi serca dziękujemy!'

const SharedLayout = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className={`${css.header} ${navIsOpen && css['is-open']}`}>
        <Nav setNavIsOpen={setNavIsOpen} />
      </header>
      <NavTablet />
      <div className={css.mobileMenuTrigger}>
        <Hamburger toggle={setNavIsOpen} toggled={navIsOpen} />
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
