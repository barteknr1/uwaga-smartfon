// import banner from '../Images/heroBanner.png'
import styles from '../Banners/HeroBanner.module.css'
const HeroBanner = () => {
  return (
    <div className={styles.HeroBanner}>
      <div className={styles.HeroBanner_img}>Hero</div>
      <div className={styles.HeroBanner_info}>
        <h1>UWAGA! SMARTFON</h1>
      </div>
      {/* <img src={banner} alt="Banner" className={styles.HeroBanner_img} /> */}
    </div>
  )
}

export default HeroBanner
