import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import Button from '../Button/Button'
import css from './Support.module.css'

const Support = () => {
  const {t} = useTranslation()
  const {isModalVisible, setIsModalVisible, setModalContent} = useModal()

  const openModal = () => {
    setIsModalVisible(true)
    setModalContent(modalContent)
  }

  const modalContent = (
    <div className={css.supportContainer}>
      <h4 className={css.supportHeader}>{t('support.title')}</h4>
      <p className={css.supportText}>{t('support.text1')}</p>
      <p className={css.supportText}>{t('support.text2')}</p>
      <div className={css.supportButtons}>
        <button className={css.supportButton} type="button">
          35 zł
        </button>
        <button className={css.supportButton} type="button">
          45 zł
        </button>
        <button className={css.supportButton} type="button">
          100 zł
        </button>
        <button className={css.supportButton} type="button">
          ____zł
        </button>
      </div>
      <Button type="submit" content={t('support.button')} variant="primary" />
    </div>
  )

  return (
    <>
      <Button
        type="button"
        variant="support"
        content={t('support.button')}
        onClick={() => openModal()}
      />
    </>
  )
}

export default Support
