import css from "./Button.module.css"
import PropTypes from 'prop-types'

const Button = ({ onClick, content, variant }) => {
  return (
    <button
      className={`${css.button} ${css[variant]}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
}

export default Button


// example of usage
{/* <Button content="Zapisz się na konferencję" variant="primary"/> */}
