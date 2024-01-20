import Banner from '../../components/Banner/Banner'
import Image2 from '../../assets/banner/heroBanner2.png'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'

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
      <VolunteerForm />
      <DearVolunteer />
    </>
  )
}

export default Volunteering
