import {useTranslation} from 'react-i18next'
import WorkshopsForm from '../WorkshopsForm/WorkshopsForm'
import Button from '../Button/Button'
import Section from '../Section/Section'
import css from './Workshops.module.css'
import {useModal} from '../Modal/ModalProvider'

const Workshops = () => {
  const {t} = useTranslation()
  const {isModalVisible} = useModal()
  return (
    <Section
      sectionClass={
        isModalVisible
          ? `${css.workshops} ${css.workshopsModalIsOpen}`
          : css.workshops
      }
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
      <WorkshopsForm />
    </Section>
  )
}

export default Workshops
