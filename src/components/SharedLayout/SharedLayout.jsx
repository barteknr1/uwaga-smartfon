import {Outlet, useLocation} from 'react-router-dom'
import {Suspense, useEffect, useState} from 'react'
import {Spin as Hamburger} from 'hamburger-react'
import {useTranslation} from 'react-i18next'
import sprite from '../../assets/svg/sprite.svg'
import NavHome from '../NavHome/NavHome'
import Footer from '../Footer/Footer'
import NavTablet from '../NavTablet/NavTablet'
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  const volunteerText = `${t('footer.heading1')}`

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
