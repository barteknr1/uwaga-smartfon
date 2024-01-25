import Comments from '../../components/Comments/Comments'
import Speakers from '../../components/Speakers/Speakers'
import Workshops from '../../components/Workshops/Workshops'
import Program from '../../components/Program/Program'

const LandingPage = () => {
  return (
    <>
      <Program />
      <Workshops />
      <Speakers />
      <Comments isLandingPage={true} />
    </>
  )
}

export default LandingPage
