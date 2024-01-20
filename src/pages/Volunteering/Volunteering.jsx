import Banner from '../../components/Banner/Banner'
import Image2 from '../../assets/banner/heroBanner2.png'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'

const Volunteering = () => {
  return (
    <>
      <Banner
        url={Image2}
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA"
        main="UWAGA! SMARTFON"
      ></Banner>
      <AboutVolunteer />
      <VolunteerAreas />
    </>
  )
}

export default Volunteering
