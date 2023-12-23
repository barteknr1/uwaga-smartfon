// import banner from '../Images/heroBanner.png'
import styles from '../Banners/HeroBanner.module.css'
const HeroBanner = () => {
  return (
    <div className={styles.HeroBanner}>
      <div className={styles.HeroBanner_img}>Hero</div>
      <div className={styles.HeroBanner_info}>
        <h2 className={styles.HeroBanner_add}>KONFERENCJA</h2>
        <h1 className={styles.HeroBanner_main}>UWAGA! SMARTFON</h1>
        <h2 className={styles.HeroBanner_add}>4 kwietnia 2024</h2>
        <h2 className={styles.HeroBanner_add}>ICE Kraków</h2>
      </div>
      {/* <img src={banner} alt="Banner" className={styles.HeroBanner_img} /> */}
    </div>
  )
}

export default HeroBanner
