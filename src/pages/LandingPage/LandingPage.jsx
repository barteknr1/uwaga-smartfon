import {useTranslation} from 'react-i18next'
import Comments from '../../components/Comments/Comments'
import Speakers from '../../components/Speakers/Speakers'
import Workshops from '../../components/Workshops/Workshops'
import Program from '../../components/Program/Program'
//import NoProgram from '../../components/NoProgram/NoProgram'
import Banner from '../../components/Banner/Banner'
import AboutConference from '../../components/AboutConference/AboutConference'
import Patrons from '../../components/Patrons/Patrons'
import Newsletter from '../../components/Newsletter/Newsletter'
import Modal from '../../components/Modal/Modal'

const LandingPage = () => {
  const {t} = useTranslation()

  return (
    <>
      <Banner page="Landing" title={t('banner.title')} />
      <AboutConference />
      <Program />
      <Workshops />
      <Speakers />
      <Comments isLandingPage={true} />
      <Patrons />
      <Newsletter />
      <Modal />
    </>
  )
}

export default LandingPage
