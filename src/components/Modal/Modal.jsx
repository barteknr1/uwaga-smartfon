import css from './Modal.module.css'
import sprite from '../../assets/svg/sprite.svg'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(true)

  const close = () => {
    setIsModalVisible(false)
  }
  const closeOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalVisible(false)
    }
  }
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape' && isModalVisible) {
        setIsModalVisible(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isModalVisible])

  return (
    <div className={isModalVisible ? css.backdrop : `${css.backdrop} ${css.isHidden}`} onClick={closeOnBackdrop}>
      <div className={css.modal}>
        <button onClick={close}>
          <svg className={css.close}>
            <use href={sprite + '#icon-close'} />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal