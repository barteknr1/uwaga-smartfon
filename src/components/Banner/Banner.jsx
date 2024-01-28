import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import CountdownTimer from '../Counter/Counter'
import css from './Banner.module.css'
import ApplicationForm from '../ApplicationForm/ApplicationForm'

const Banner = ({page, title}) => {
  const { t } = useTranslation()

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
      {<ApplicationForm/>}
    </Section>
  )
}

Banner.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
}

export default Banner
