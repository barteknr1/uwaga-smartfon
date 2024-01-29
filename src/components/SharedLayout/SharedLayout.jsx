import {useState, useEffect, useRef, Suspense} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import sprite from '../../assets/svg/sprite.svg'
import {Spin as Hamburger} from 'hamburger-react'
import {useTranslation} from 'react-i18next'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  const [showScroll, setShowScroll] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const location = useLocation()
  const { t } = useTranslation()

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const volunteerText = `${t('footer.heading1')}`

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

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
            : `${t('footer.heading2')}`
        }
      />
      <button type="button" className={showScroll ? `${css.scrollToTop} ${css.scrollVisible}` : `${css.scrollToTop}`} onClick={() => scrollToTop()}>
        <svg className={css.scrollToTopSvg}>
          <use href={sprite + '#icon-Arrow-back'} />
        </svg>
      </button>
    </>
  )
}

export default SharedLayout
