import {useTranslation} from 'react-i18next'
import Comments from '../../components/Comments/Comments'
import Speakers from '../../components/Speakers/Speakers'
import Workshops from '../../components/Workshops/Workshops'
import Program from '../../components/Program/Program'
import Banner from '../../components/Banner/Banner'
import Modal from '../../components/Modal/Modal'

const LandingPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Banner
        page="Landing"
        title={t('banner.title')} />
      <Program />
      <Workshops />
      <Speakers />
      <Comments isLandingPage={true} />
      <Modal />
    </>
  )
}

export default LandingPage
