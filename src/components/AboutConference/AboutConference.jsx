import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import Button from '../Button/Button'
import css from './AboutConference.module.css'
import {
  about_foto1,
  about_foto2,
  about_foto3,
} from '../../assets/images/AboutConference'
import sprite from '../../assets/svg/sprite.svg'

const AboutConference = () => {
  const {t} = useTranslation()

  return (
    <Section sectionClass={css.aboutConference}>
      <div className={css.aboutConferenceBox}>
        <div className={css.aboutConferenceContainer}>
          <div className={css.aboutConferenceWrapper}>
            <h3 className={css.aboutConferenceTitle}>
              {t('aboutConference.title1')}
            </h3>
            <p className={css.aboutConferenceText}>
              {t('aboutConference.text1')}
            </p>
          </div>
          <div className={css.aboutConferenceImgBox}>
            <img
              className={css.aboutConferenceImg}
              src={about_foto1}
              alt="prelegenci konferencji"
            />
            <svg
              className={`${css.aboutConferenceSvg} ${css.aboutConferenceSvg1}   `}
            >
              <use href={sprite + '#aboutPurple'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutConferenceContainer}>
          <div className={css.aboutConferenceWrapper}>
            <h3 className={css.aboutConferenceTitle}>
              {t('aboutConference.title2')}
            </h3>
            <p className={css.aboutConferenceText}>
              {t('aboutConference.text2')}
            </p>
          </div>
          <div className={css.aboutConferenceImgBox}>
            <img
              className={css.aboutConferenceImg}
              src={about_foto2}
              alt="widownia"
            />
            <svg
              className={`${css.aboutConferenceSvg} ${css.aboutConferenceSvg2}   `}
            >
              <use href={sprite + '#aboutViolet'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutConferenceContainer}>
          <div className={css.aboutConferenceWrapper}>
            <h3 className={css.aboutConferenceTitle}>
              {t('aboutConference.title3')}
            </h3>
            <p className={css.aboutConferenceText}>
              {t('aboutConference.text3')}
            </p>
          </div>
          <div className={css.aboutConferenceImgBox}>
            <img
              className={css.aboutConferenceImg}
              src={about_foto3}
              alt="widownia"
            />
            <svg
              className={`${css.aboutConferenceSvg} ${css.aboutConferenceSvg3}   `}
            >
              <use href={sprite + '#aboutPink'} />
            </svg>
          </div>
        </div>
        <Button variant="secondary" content={t('aboutConference.buttonText')} />
      </div>
    </Section>
  )
}
export default AboutConference
