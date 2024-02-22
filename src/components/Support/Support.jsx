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

  const handleSubmit = (event) => {
    setModalContent(
      <div>
        <h2>
          Dziękujemy za okazane wsparcie! Tylko z Waszą pomocą możemy rozwijać i
          udoskonalać wydarzenie Uwaga! Smartfon.
        </h2>
        <p>
          Zapraszamy także wszystkich chętnych do udziału w wolontariacie.
          Wypełnij formularz zgłoszeniowy i dołącz do naszego zespołu
          wolontariuszy!
        </p>
        <Button
          type="button"
          variant="primary"
          content={`Zostań wolontariuszem`}
        />
        <p>
          Przypominamy również o możliwości zapisania się do naszego newslettera
          i śledzenia na bieżąco wydarzenia w social mediach.
        </p>
        <Button
          type="button"
          variant="primary"
          content={`Zapisz się do newslettera`}
        />
      </div>
    )
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
      <Button
        type="submit"
        content={t('support.button')}
        variant="primary"
        onClick={() => handleSubmit()}
      />
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
