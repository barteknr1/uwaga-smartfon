import PropTypes from 'prop-types'
import css from './OurVolunteers.module.css'
import sprite from '../../assets/svg/sprite.svg'

const SingleVolunteer = ({name, teamRole, linkedinUrl, images}) => (
  <div className={css.volunteerWrapper}>
    <img className={css.volunteerImg} src={images} alt={name} />
    <div className={css.textTablet}>
      <h5 className={css.volunteerName}>{name}</h5>
      <div className={css.volunteerText}>
        <a
          href={linkedinUrl}
          className={css.volunteerRole}
          target="_blank"
          rel="noopener noreferrer"
        >
          {teamRole}
        </a>
        <svg className={css.volunteerIcon}>
          <use href={sprite + '#linkedin'} />
        </svg>
      </div>
    </div>
  </div>
)
SingleVolunteer.propTypes = {
  name: PropTypes.string.isRequired,
  teamRole: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
}

export default SingleVolunteer
