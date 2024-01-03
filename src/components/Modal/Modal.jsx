import css from './Modal.module.css'

const Modal = ({children}) => {
  return (
    <div className={css.modal}>
      <div>{children}</div>
    </div>
  )
}

export default Modal