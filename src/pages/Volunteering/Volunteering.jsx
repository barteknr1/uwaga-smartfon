import Banner from '../../components/Banner/Banner'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'
import OurVolunteers from '../../components/OurVolunteers/OurVolunteers'

import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'

const Volunteering = () => {
  return (
    <>
      <Banner
        page="Volunteering"
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA"
        button="Dołącz do wolontariatu"
      ></Banner>
      <AboutVolunteer />
      <OurVolunteers />
      <VolunteerAreas />
      <VolunteerForm />
      <DearVolunteer />
    </>
  )
}

export default Volunteering
