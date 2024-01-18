import Comments from '../../components/Comments/Comments'
import Speakers from '../../components/Speakers/Speakers'
import Workshops from '../../components/Workshops/Workshops'

const LandingPage = () => {
  return (
    <>
      <Workshops />
      <Speakers />
      <Comments isLandingPage={true} />
    </>
  )
}

export default LandingPage
