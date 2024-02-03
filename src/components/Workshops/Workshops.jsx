import {useTranslation} from 'react-i18next'
import Button from '../Button/Button'
import Section from '../Section/Section'
import css from './Workshops.module.css'

const Workshops = () => {
  const {t} = useTranslation()

  return (
    <Section
      sectionClass={css.workshops}
      titleClass={css.workshopsTitle}
      title={t('workshops.title')}
    >
      <div className={css.workshopsContainer}>
        <div className={css.workshopsBox}>
          <p className={css.workshopsText}>
            {t('workshops.text1')}{' '}
            <span className={css.boldText}>{t('workshops.bold1')} </span>
            {t('workshops.text2')}{' '}
            <span className={css.boldText}>{t('workshops.bold2')}</span>
          </p>
        </div>
        <div className={css.workshopsBox}>
          <p className={css.workshopsListText}>{t('workshops.text3')}</p>
          <ul className={css.workshopsList}>
            <li className={css.workshopsListItem}>
              {t('workshops.list.item1')}
            </li>
            <li className={css.workshopsListItem}>
              {t('workshops.list.item2')}
            </li>
            <li className={css.workshopsListItem}>
              {t('workshops.list.item3')}
            </li>
            <li className={css.workshopsListItem}>
              {t('workshops.list.item4')}
            </li>
          </ul>
        </div>
      </div>
      <Button variant="primary" content={t('workshops.button')} />
    </Section>
  )
}

export default Workshops
