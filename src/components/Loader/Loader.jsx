import {TailSpin} from 'react-loader-spinner'
import css from './Loader.module.css'
import PropTypes from 'prop-types'

const Loader = ({isLoading}) => {
  return (
    <>
      {isLoading && (
        <div className={css.backdrop}>
          <div className={css.loaderContainer}>
            <TailSpin />
          </div>
        </div>
      )}
      {!isLoading && <div className={`${css.backdrop} ${css.isHidden}`}></div>}
    </>
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loader
