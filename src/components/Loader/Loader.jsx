import {ColorRing, TailSpin} from 'react-loader-spinner'
import css from './Loader.module.css'
import PropTypes from 'prop-types'

const Loader = ({isLoading}) => {
  return (
    <>
      {isLoading && (
        <div className={css.backdrop}>
          <div className={css.loaderContainer}>
            <ColorRing
              height="80"
              width="80"
              colors={['#9a5fbd', '#521b9a', '#9a5fbd', '#521b9a', '#9a5fbd']}
            />
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
