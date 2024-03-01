import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import SupportForm from './SupportForm'
import Button from '../Button/Button'

const SupportButton = () => {
  const {t} = useTranslation()
  const {openModal, setModalContent} = useModal()

  const handleOpenModal = () => {
    setModalContent(<SupportForm />)
    openModal()
  }

  return (
    <>
      <Button
        type="button"
        variant="support"
        content={t('support.button')}
        onClick={() => handleOpenModal()}
      />
    </>
  )
}

export default SupportButton
