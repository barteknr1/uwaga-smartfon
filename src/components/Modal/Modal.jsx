import css from './Modal.module.css'
import sprite from '../../assets/svg/sprite.svg'
import { useState } from 'react'

const Modal = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(true)

  const close = () => {
    setIsModalVisible(!isModalVisible)
    console.log(isModalVisible);
  }
  return (
    <div className={isModalVisible ? css.backdrop : `${css.backdrop} ${css.isHidden}`}>
      <div className={css.modal}>
        <button  className={css.close} onClick={close}>
          <svg className={css.closeIcon} width="24" height="24">
            <use href={sprite + '#icon-close'} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
};

export default Modal