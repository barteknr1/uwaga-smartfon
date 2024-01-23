import PropTypes from 'prop-types'
import css from './OurVolunteers.module.css'
import sprite from '../../assets/svg/sprite.svg'

const SingleVolunteer = ({name, teamRole, teamRole2, images}) => (
  <div className={css.volunteerWrapper}>
    <img className={css.volunteerImg} src={images} alt={name} />
    <div className={css.textTablet}>
      <h5 className={css.volunteerName}>{name}</h5>
      <div className={css.volunteerText}>
        <p className={css.volunteerRole}>{teamRole}</p>
        <p className={css.volunteerRole}>{teamRole2}</p>
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
  teamRole2: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
}

export default SingleVolunteer
