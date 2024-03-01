import Button from '../Button/Button'
import {useModal} from '../Modal/ModalProvider'
import {useTranslation} from 'react-i18next'
import ApplicationForm from './ApplicationForm'

const ApplicationFormButton = () => {
  const {t} = useTranslation()
  const {openModal, setModalContent} = useModal()

  const handleOpenModal = () => {
    setModalContent(<ApplicationForm />)
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

export default ApplicationFormButton
