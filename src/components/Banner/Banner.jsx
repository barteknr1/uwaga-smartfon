import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import CountdownTimer from '../Counter/Counter'
import css from './Banner.module.css'
import ApplicationFormButton from '../ApplicationForm/ApplicationFormButton'
import Button from '../Button/Button'
import {useLocation} from 'react-router-dom'
import {scrollToAnchor} from '../Scroll'

const Banner = ({page, title}) => {
  const {t} = useTranslation()
  const location = useLocation()

  return (
    <Section
      sectionClass={`${css.banner} ${css[`banner${page}`]}`}
      titleClass={css.bannerTitle}
      title={title}
    >
      <h1 className={css.titleMain}>UWAGA! SMARTFON</h1>
      {(page === 'Home' || page === 'Landing') && (
        <div className={css.bannerContainer}>
          <div>
            <p className={css.bannerText}>{t('banner.date')}</p>
            <p className={css.bannerText}>CKF_13 Kraków</p>
          </div>
          <CountdownTimer />
        </div>
      )}
      {location.pathname.startsWith('/volunteering') ? (
        <Button
          type="button"
          variant="primary"
          content={t('banner.buttonVolunteer')}
          onClick={() => scrollToAnchor(`#volunteer_form`.substring(1))}
        />
      ) : (
        <ApplicationFormButton />
      )}
    </Section>
  )
}

Banner.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Banner
