import PropTypes from 'prop-types'
import styles from '../Banners/HeroBanner.module.css'
const Banner = ({url, title, main, addL1, addL2}) => {
  return (
    <div className={styles.HeroBanner}>
      <img src={url} alt="Banner" className={styles.HeroBanner_img} />

      <div className={styles.HeroBanner_info}>
        <h2 className={styles.HeroBanner_add}>{title}</h2>
        <h1 className={styles.HeroBanner_main}>{main}</h1>
        <h2 className={styles.HeroBanner_add}>{addL1}</h2>
        <h2 className={styles.HeroBanner_add}>{addL2}</h2>
      </div>
    </div>
  )
}

Banner.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  addL1: PropTypes.string.isRequired,
  addL2: PropTypes.string.isRequired,
}

export default Banner
