import Comments from '../../components/Comments/Comments'
import Workshops from '../../components/Workshops/Workshops'

const LandingPage = () => {
  return (
    <>
      <div>LandingPage</div>
      <Workshops />
      <Comments isLandingPage={true} />
    </>
  )
}

export default LandingPage
