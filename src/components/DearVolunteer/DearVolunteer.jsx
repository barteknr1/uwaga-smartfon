import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import css from './DearVolunteer.module.css'
import sprite from '../../assets/svg/sprite.svg'

const DearVolunteer = () => {
  const {t} = useTranslation()

  return (
    <Section
      sectionClass={css.dearVolunteer}
      titleClass={css.dearVolunteerTitle}
      title={t('dearVolunteer.title')}
    >
      <div className={css.container}>
        <div className={css.textWrapper}>
          <div className={css.textBox}>
            <p className={css.dearVolunteerText}>{t('dearVolunteer.text1')}</p>
            <p className={css.dearVolunteerText}>{t('dearVolunteer.text2')}</p>
            <p className={css.dearVolunteerText}>{t('dearVolunteer.text3')}</p>
          </div>
          <div className={css.textBox}>
            <p className={css.dearVolunteerText}>{t('dearVolunteer.text4')}</p>
            <p className={css.dearVolunteerText}>{t('dearVolunteer.text5')}</p>
            <svg className={css.dearVolunteerSvg}>
              <use href={sprite + '#icon-ILUSTRACJA'} />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default DearVolunteer
