import {useState, useEffect, createContext, useContext} from 'react'
import PropTypes from 'prop-types'

const ModalContext = createContext()

const useModal = () => {
  return useContext(ModalContext)
}

export const ModalProvider = ({children}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    setIsModalVisible(true)
  }

  const closeModal = () => {
    document.body.style.overflow = 'visible'
    setIsModalVisible(false)
  }
  const closeOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal()
    }
  }
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape' && isModalVisible) {
        closeModal()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isModalVisible])

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        closeModal,
        closeOnBackdrop,
        openModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node,
}

export {ModalContext, useModal}
