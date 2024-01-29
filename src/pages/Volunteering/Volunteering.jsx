import Banner from '../../components/Banner/Banner'
import VolunteerAreas from '../../components/VolunteerAreas/VolunteerAreas'
import AboutVolunteer from '../../components/AboutVolunteer/AboutVolunteer'
import DearVolunteer from '..//../components/DearVolunteer/DearVolunteer'
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm'
import {useTranslation} from 'react-i18next'
import OurVolunteers from '../../components/OurVolunteers/OurVolunteers'

const Volunteering = () => {
  const {t} = useTranslation()
  return (
    <>
      <Banner
        page="Volunteering"
        title={t('banner.titleVolunteer')}
        button={t('banner.buttonVolunteer')}
      ></Banner>
      <AboutVolunteer />
      <VolunteerAreas />
      <VolunteerForm />
      <OurVolunteers />
      <DearVolunteer />
    </>
  )
}

export default Volunteering
