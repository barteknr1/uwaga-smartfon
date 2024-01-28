import Banner from '../../components/Banner/Banner'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'
import {useTranslation} from 'react-i18next'
import Modal from '../../components/Modal/Modal'

const Volunteering = () => {
  const {t} = useTranslation()
  return (
    <>
      <Banner
        page="Volunteering"
        title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA" />
      <AboutVolunteer />
      <VolunteerAreas />
      <VolunteerForm />
      <DearVolunteer />
      <Modal />
    </>
  )
}

export default Volunteering
