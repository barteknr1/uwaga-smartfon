import PropTypes from 'prop-types'
import css from './Program.module.css'
import sprite from '../../assets/svg/sprite.svg'

const SingleSchedule = ({
  scheduleTime,
  scheduleText,
  additionalText,
  expandedDetails,
  onToggleDetails,
}) => {
  return (
    <div className={css.singleSchedule}>
      <div className={css.timeAndContentBox}>
        <p className={css.scheduleTime}>{scheduleTime}</p>
        <div className={css.scheduleContent}>
          <p className={css.scheduleText}>
            {scheduleText}
            {expandedDetails && (
              <p className={css.additionalText}>{additionalText}</p>
            )}
          </p>
        </div>
      </div>
      <svg className={css.scheduleSvg} onClick={onToggleDetails}>
        <use
          href={expandedDetails ? `${sprite}#icon-up` : `${sprite}#icon-down`}
        />
      </svg>
    </div>
  )
}

SingleSchedule.propTypes = {
  scheduleTime: PropTypes.string.isRequired,
  scheduleText: PropTypes.string.isRequired,
  additionalText: PropTypes.string.isRequired,
  expandedDetails: PropTypes.bool.isRequired,
  onToggleDetails: PropTypes.func.isRequired,
}

export default SingleSchedule
