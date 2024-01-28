import Banner from '../../components/Banner/Banner'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'
import Modal from '../../components/Modal/Modal'

const Volunteering = () => {
  return (
    <>
      <Banner
        page="Volunteering"
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA" />
      <AboutVolunteer />
      <VolunteerAreas />
      <DearVolunteer />
      <Modal />
    </>
  )
}

export default Volunteering
