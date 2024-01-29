import css from "./Button.module.css"
import PropTypes from 'prop-types'

const Button = ({ onClick, content, variant, type }) => {
  return (
    <button
      type={type}
      className={`${css.button} ${css[variant]}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  content: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
}

export default Button
