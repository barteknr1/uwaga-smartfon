import css from './Support.module.css'
import Button from '../Button/Button'
import {useModal} from '../Modal/ModalProvider'

const Support = () => {
  const {isModalVisible, setIsModalVisible, setModalContent} = useModal()

  const openModal = () => {
    setIsModalVisible(true)
    setModalContent(modalContent)
  }

  const modalContent = (
    <div className={css.supportContainer}>
      <h4 className={css.supportHeader}>Wesprzyj naszą inicjatywę</h4>
      <p className={css.supportText}>
        Dołącz do nas i przekaż darowiznę — tylko z Twoją pomocą może nam się to
        udać!
      </p>
      <p className={css.supportText}>
        Wybierz kwotę darowizny, którą chcesz przekazać:
      </p>
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
      <Button type="submit" content="Wesprzyj" variant="primary" />
    </div>
  )

  return (
    <>
      <Button
        type="button"
        variant="support"
        content="Support"
        onClick={() => openModal()}
      />
    </>
  )
}

export default Support
