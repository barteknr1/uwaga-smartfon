import React, {useState, useEffect, useRef, Suspense} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {Spin as Hamburger} from 'hamburger-react'
import {useTranslation} from 'react-i18next'

import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'
import ScrollToAnchor from '../ScrollToAnchor/ScrollToAnchor'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

import sprite from '../../assets/svg/sprite.svg'
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  const [showScroll, setShowScroll] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const containerRef = useRef(null)

  const location = useLocation()
  const {t} = useTranslation()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const isHamburgerMenuClick = event.target.closest('.mobileMenuTrigger')
      const isNavClick = event.target.closest(`.${css.header}`)

      if (
        navIsOpen &&
        !isHamburgerMenuClick &&
        !containerRef.current.contains(event.target) &&
        !isNavClick
      ) {
        setNavIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [navIsOpen])

  const volunteerText = `${t('footer.heading1')}`

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  return (
    <>
      <ScrollToAnchor />
      <header
        className={`${css.header} ${navIsOpen && css['is-open']}`}
        ref={containerRef}
      >
        <Nav setNavIsOpen={setNavIsOpen} />
      </header>

      <NavTablet />
      <div ref={containerRef} className={css.mobileMenuTrigger}>
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
            : `${t('footer.heading2')}`
        }
      />
      <button
        type="button"
        className={
          showScroll
            ? `${css.scrollToTop} ${css.scrollVisible}`
            : `${css.scrollToTop}`
        }
        onClick={() => ScrollToTop()}
      >
        <svg className={css.scrollToTopSvg}>
          <use href={sprite + '#icon-Arrow-back'} />
        </svg>
      </button>
    </>
  )
}

export default SharedLayout
