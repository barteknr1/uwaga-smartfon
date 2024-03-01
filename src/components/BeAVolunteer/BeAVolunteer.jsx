import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import css from './BeAVolunteer.module.css'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'
import {useNavigate} from 'react-router-dom'

const BeAVolunteer = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()

  return (
    <Section
      sectionClass={css.BeAVolunteer}
      titleClass={css.BeAVolunteerTitle}
      title={t('beAVolunteer.title')}
      id="be_a_volunteer"
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
          </div>
        </div>
        <Button
          onClick={() => navigate('../volunteering')}
          type="button"
          variant="secondary"
          content={t('beAVolunteer.buttonText')}
        ></Button>
      </div>
    </Section>
  )
}
export default BeAVolunteer
