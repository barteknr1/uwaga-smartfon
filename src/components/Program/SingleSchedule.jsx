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
          <span className={css.scheduleText}>
            {scheduleText}
            {expandedDetails && additionalText && (
              <div className={css.additionalText}>
                {additionalText.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </span>
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
  additionalText: PropTypes.string,
  expandedDetails: PropTypes.bool,
  onToggleDetails: PropTypes.func.isRequired,
}

export default SingleSchedule
