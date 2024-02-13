import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import Button from '../Button/Button'
import ModalContent from './WorkshopFormModalContent'

const WorkshopsForm = () => {
  const {t} = useTranslation()

  const {openModal, setModalContent} = useModal()

  const content = <ModalContent />
  const handleOpenModal = () => {
    setModalContent(content)
    openModal()
  }
  return (
    <>
      <Button
        type="button"
        variant="primary"
        content="Zapisz się na warsztat"
        onClick={handleOpenModal}
      />
    </>
  )
}

export default WorkshopsForm
