import { useModal } from './ModalProvider'
import css from './Modal.module.css'
import sprite from '../../assets/svg/sprite.svg'

const Modal = () => {
  const { isModalVisible, closeModal, closeOnBackdrop, modalContent } = useModal();
  return (
      <div className={isModalVisible ? css.backdrop : `${css.backdrop} ${css.isHidden}`} onClick={closeOnBackdrop}>
        <div className={css.modal}>
          <button className={css.closeModal} onClick={closeModal}>
            <svg className={css.closeIcon} width="24" height="24">
              <use href={sprite + '#icon-close'} />
            </svg>
        </button>
        {modalContent}
        </div>
    </div>
  )
}

export default Modal