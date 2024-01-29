import {useState, useEffect, useRef, Suspense} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Spin as Hamburger} from 'hamburger-react'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'

import css from './SharedLayout.module.css'

const volunteerText = 'Z głębi serca dziękujemy!'

const SharedLayout = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const location = useLocation()

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setNavIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <header
        className={`${css.header} ${navIsOpen && css['is-open']}`}
        ref={menuRef}
      >
        <Nav setNavIsOpen={setNavIsOpen} />
      </header>
      <NavTablet />
      <div className={css.mobileMenuTrigger}>
        <Hamburger toggle={setNavIsOpen} toggled={navIsOpen} ref={buttonRef} />
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
