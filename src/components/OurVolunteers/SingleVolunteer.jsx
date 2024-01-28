import React from 'react'
import PropTypes from 'prop-types'
import css from './OurVolunteers.module.css'
import sprite from '../../assets/svg/sprite.svg'

const SingleVolunteer = ({name, teamRole, linkedinUrl, images}) => (
  <div className={css.volunteerWrapper}>
    <img className={css.volunteerImg} src={images} alt={name} />
    <div className={css.text}>
      <h5 className={css.volunteerName}>{name}</h5>

      <a
        href={linkedinUrl}
        className={css.volunteerRole}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={css.teamRoleWrapper}>
          {Array.isArray(teamRole) ? (
            teamRole.map((role, index) => <p key={index}>{role}</p>)
          ) : (
            <p>{teamRole}</p>
          )}
        </div>

        <svg className={css.volunteerIcon}>
          <use href={sprite + '#icon-ion_social-linkedin'} />
        </svg>
      </a>
    </div>
  </div>
)

SingleVolunteer.propTypes = {
  name: PropTypes.string.isRequired,
  teamRole: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  images: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
}

export default SingleVolunteer
