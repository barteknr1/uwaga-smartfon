import Img1 from '../../assets/VolunteeringAreas/Img1.png'
import Img2 from '../../assets/VolunteeringAreas/Img2.png'
import Img3 from '../../assets/VolunteeringAreas/Img3.png'
import Img4 from '../../assets/VolunteeringAreas/Img4.png'
import Img5 from '../../assets/VolunteeringAreas/Img5.png'
import Img6 from '../../assets/VolunteeringAreas/Img6.png'
import Img7 from '../../assets/VolunteeringAreas/Img7.png'
import Img8 from '../../assets/VolunteeringAreas/Img8.png'
import VolunteeringAreasItem from '../../components/VolunteeringAreasItem/VolunteeringAreasItem'
import styles from './VolunteeringAreas.module.css'
const VolunteeringAreas = () => {
  return (
    <div className={styles.VolunteeringAreas}>
      <h2 className={styles.VolunteeringAreas_Title}>
        Obszary działania wolontariatu
      </h2>
      <div className={styles.VolunteeringAreas}>
        <VolunteeringAreasItem
          url={Img4}
          description="Współtworzenie strategii działań na platformach społecznościowych."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img5}
          description="Tworzenie wartościowych treści (w szczególności na Facebooku, LinkedIn, X, Instagramie, YouTube)."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img1}
          description="Moderowanie kanałów fundacji w mediach społecznościowych."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img2}
          description="Współtworzenie pracy biura fundacji."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img8}
          description="Praca przy organizowaniu wydarzenia “Uwaga! Smartfon”."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img6}
          description="Propagowanie wydarzenia w swojej społeczności lokalnej, w obrębie szkoły, w kołach zainteresowań."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img7}
          description="Działania podczas konferencji, takie jak: przyjmowanie uczestników i dbanie o komunikację między gośćmi konferencji."
        ></VolunteeringAreasItem>
        <VolunteeringAreasItem
          url={Img3}
          description="Pomoc w przeprowadzaniu badań oraz tworzeniu raportów na temat uzależnienia młodzieży od smartfonów."
        ></VolunteeringAreasItem>
      </div>
      <span className={styles.VolunteeringAreas_Text}>
        Oraz wiele innych, o których teraz nawet nie pomyśleliśmy.
      </span>
    </div>
  )
}

export default VolunteeringAreas
