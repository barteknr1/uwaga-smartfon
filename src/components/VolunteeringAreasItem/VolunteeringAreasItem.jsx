import PropTypes from 'prop-types'
import styles from './VolunteeringAreasItem.module.css'

const VolunteeringAreasItem = ({url, description}) => {
  return (
    <div>
      <div className={styles.VolunteeringAreasItem}>
        <div className={styles.VolunteeringAreasItem_Item}>
          <img src={url} alt="VolunteeringAreasPhoto" />
          <span className={styles.VolunteeringAreasItem_ItemDescription}>
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
VolunteeringAreasItem.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
export default VolunteeringAreasItem
