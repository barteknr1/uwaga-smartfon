import Comments from '../../components/Comments/Comments'
import Workshops from '../../components/Workshops/Workshops'
import Program from '../../components/Program/Program'

const LandingPage = () => {
  return (
    <>
      <div>LandingPage</div>
      <Program />
      <Workshops />
      <Comments isLandingPage={true} />
    </>
  )
}

export default LandingPage
