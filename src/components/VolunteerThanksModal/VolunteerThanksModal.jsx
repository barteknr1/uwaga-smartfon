import {useTranslation} from 'react-i18next'

import {useModal} from '../Modal/ModalProvider'
import Button from '../Button/Button'

import css from './VolunteerThanksModal.module.css'

const VolunteerThanksModal = () => {
  const {t} = useTranslation()
  const {isModalVisible, setIsModalVisible, setModalContent} = useModal()

  const openModal = () => {
    setIsModalVisible(true)
    setModalContent(modalContent)
  }

  const modalContent = (
    <div className={css.volunteerThanksContainer}>
      <h4 className={css.volunteerThanksHeader}>
        {t('volunteerThanks.title')}
      </h4>
      <p className={css.volunteerThanksText}>{t('volunteerThanks.text')}</p>
    </div>
  )

  return (
    <Button
      type="button"
      variant="primary"
      content={t('volunteerThanks.button')}
      onClick={() => openModal()}
    />
  )
}

export default VolunteerThanksModal
