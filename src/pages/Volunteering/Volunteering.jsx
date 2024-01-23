import Banner from '../../components/Banner/Banner'
import Image2 from '../../assets/banner/heroBanner2.png'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'
import OurVolunteers from '../../components/OurVolunteers/OurVolunteers'


const Volunteering = () => {
  return (
    <>
      <Banner
        url={Image2}
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA"
        main="UWAGA! SMARTFON"
      ></Banner>
      <AboutVolunteer />
      <OurVolunteers/>
      <VolunteerAreas />
      <DearVolunteer />
    </>
  )
}

export default Volunteering
