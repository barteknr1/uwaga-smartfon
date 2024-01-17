import PropTypes from 'prop-types'
import css from './Program.module.css'
import sprite from '../../assets/svg/sprite.svg'

const SingleSchedule = ({
  isMobileView,
  scheduleTime,
  scheduleText,
  additionalText,
  expandedDetails,
  onToggleDetails,
}) => {
  return isMobileView ? (
    <div className={css.singleSchedule}>
      <div className={css.scheduleMobile}>
        <h4 className={css.scheduleTime}>{scheduleTime}</h4>
        <svg className={css.scheduleSvg} onClick={onToggleDetails}>
          <use
            href={expandedDetails ? sprite + '#icon-up' : sprite + '#icon-down'}
          />
        </svg>
      </div>
      <div className={css.scheduleContetnt}>
        <p className={css.scheduleText}>
          {scheduleText}
          {expandedDetails && (
            <p className={css.additionalText}>{additionalText}</p>
          )}
        </p>
      </div>
    </div>
  ) : (
    <div className={css.singleSchedule}>
      <div className={css.scheduleTablet}>
        <h4 className={css.scheduleTime}>{scheduleTime}</h4>
        <div className={css.scheduleContetnt}>
          <p className={css.scheduleText}>
            {scheduleText}
            {expandedDetails && (
              <p className={css.additionalText}>{additionalText}</p>
            )}
          </p>
        </div>
        <svg className={css.scheduleSvg} onClick={onToggleDetails}>
          <use
            href={expandedDetails ? sprite + '#icon-up' : sprite + '#icon-down'}
          />
        </svg>
      </div>
    </div>
  )
}

SingleSchedule.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  scheduleTime: PropTypes.string.isRequired,
  scheduleText: PropTypes.string.isRequired,
  additionalText: PropTypes.string.isRequired,
  expandedDetails: PropTypes.bool.isRequired,
  onToggleDetails: PropTypes.func.isRequired,
  iconDown: PropTypes.bool.isRequired,
}

export default SingleSchedule
