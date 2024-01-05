import css from './Modal.module.css'
import sprite from '../../assets/svg/sprite.svg'
import { useState } from 'react'

const Modal = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const close = () => {
    setIsModalVisible(!isModalVisible)
    console.log(isModalVisible);
  }
  return (
    <div className={isModalVisible ? css.backdrop : `${css.backdrop} ${css.isHidden}`}>
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

export default Modal