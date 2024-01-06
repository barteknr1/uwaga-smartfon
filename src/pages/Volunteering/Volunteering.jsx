import Banner from '../../components/Banner/Banner'
import Image2 from '../../assets/banner/heroBanner2.png'
import VolunteeringAreas from '../../components/VolunteeringAreas/VolunteeringAreas'

const Volunteering = () => {
  return (
    <div>
      <Banner
        url={Image2}
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA"
        main="UWAGA! SMARTFON"
      ></Banner>
      <VolunteeringAreas></VolunteeringAreas>
    </div>
  )
}

export default Volunteering
