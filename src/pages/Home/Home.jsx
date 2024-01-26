import {useTranslation} from 'react-i18next'
import Comments from '../../components/Comments/Comments'
import Patrons from '../../components/Patrons/Patrons'
import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import Banner from '../../components/Banner/Banner'
import Newsletter from '../../components/Newsletter/Newsletter'
import AboutConference from '../../components/AboutConference/AboutConference'
import BeAVolunteer from '../../components/BeAVolunteer/BeAVolunteer'

const Home = () => {
  const {t} = useTranslation()

  return (
    <>
      <Banner
        page="Home"
        title={t('banner.title')}
        button={t('banner.button')}
      />
      <AboutConference />
      <PreviousEdition />
      <Comments isLandingPage={false} />
      <BeAVolunteer />
      <Patrons />
      <Newsletter />
    </>
  )
}

export default Home
