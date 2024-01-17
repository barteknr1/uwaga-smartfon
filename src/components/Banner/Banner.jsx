import PropTypes from 'prop-types'
import styles from '../Banner/Banner.module.css'
import CountdownTimer from '../Counter/Counter'


const Banner = ({ url, title, main, addLine1, addLine2 }) => {
  return (
    <div className={styles.HeroBanner}>
      <img src={url} alt="Banner" className={styles.HeroBanner_img} />
      <div className={styles.HeroBanner_info}>
        <h2 className={styles.HeroBanner_add}>{title}</h2>
        <h1 className={styles.HeroBanner_main}>{main}</h1>
        <h2 className={styles.HeroBanner_add}>{addLine1}</h2>
        <h2 className={styles.HeroBanner_add}>{addLine2}</h2>
      </div>
      <CountdownTimer />
    </div>
  )
}

Banner.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  addLine1: PropTypes.string.isRequired,
  addLine2: PropTypes.string.isRequired,
}

export default Banner
