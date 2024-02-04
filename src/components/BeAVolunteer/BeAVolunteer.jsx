import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import css from './BeAVolunteer.module.css'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'

const BeAVolunteer = () => {
  const {t} = useTranslation()

  return (
    <Section
      sectionClass={css.BeAVolunteer}
      titleClass={css.BeAVolunteerTitle}
      title={t('beAVolunteer.title')}
    >
      <div className={css.BeAVolunteerContainer}>
        <div className={css.BeAVolunteerContainerBox}>
          <svg className={css.BeAVolunteerSvg}>
            <use href={sprite + '#group'} />
          </svg>
          <div className={css.BeAVolunteerTextContainer}>
            <p className={css.BeAVolunteerText}>{t('beAVolunteer.text1')}</p>
            <p className={css.BeAVolunteerText}>{t('beAVolunteer.text2')} </p>
            <p className={css.BeAVolunteerText}>{t('beAVolunteer.text3')}</p>
          </div>{' '}
        </div>
        <Button
          type="button"
          variant="secondary"
          content={t('beAVolunteer.buttonText')}
        ></Button>
      </div>{' '}
    </Section>
  )
}
export default BeAVolunteer
