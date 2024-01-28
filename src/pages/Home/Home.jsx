import {useTranslation} from 'react-i18next'
import Comments from '../../components/Comments/Comments'
import Patrons from '../../components/Patrons/Patrons'
import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import Banner from '../../components/Banner/Banner'
import Newsletter from '../../components/Newsletter/Newsletter'
import AboutConference from '../../components/AboutConference/AboutConference'
import BeAVolunteer from '../../components/BeAVolunteer/BeAVolunteer'
import Support from '../../components/Support/Support'
import Modal from '../../components/Modal/Modal'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Banner
        page="Home"
        title={t('banner.title')}
      />
      <AboutConference />
      <PreviousEdition />
      <Comments isLandingPage={false} />
      <BeAVolunteer />
      <Patrons />
      <Newsletter />
      <Modal/>
    </>
  )
}

export default Home
