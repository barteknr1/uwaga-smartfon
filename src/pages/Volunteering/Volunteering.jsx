import Banner from '../../components/Banner/Banner'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'

const Volunteering = () => {
  return (
    <>
      <Banner
        page="Volunteering"
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA"
        button="Dołącz do wolontariatu"
      ></Banner>
      <AboutVolunteer />
      <VolunteerAreas />
      <DearVolunteer />
    </>
  )
}

export default Volunteering
