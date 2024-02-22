import Button from '../Button/Button'
import {useModal} from '../Modal/ModalProvider'
import {useTranslation} from 'react-i18next'
import ApplicationFormContent from './ApplicationFormContent'

const ApplicationForm = () => {
  const {t} = useTranslation()
  const {openModal, setModalContent} = useModal()

  const handleOpenModal = () => {
    setModalContent(<ApplicationFormContent />)
    openModal()
  }
  return (
    <>
      <Button
        type="button"
        variant="primary"
        content={t('banner.button')}
        onClick={() => handleOpenModal()}
      />
    </>
  )
}

export default ApplicationForm
