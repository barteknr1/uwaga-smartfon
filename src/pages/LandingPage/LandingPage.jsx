import Comments from '../../components/Comments/Comments'
import Workshops from '../../components/Workshops/Workshops'

const LandingPage = () => {
  return (
    <>
      <Workshops />
      <Comments isLandingPage={true} />
    </>
  )
}

export default LandingPage
