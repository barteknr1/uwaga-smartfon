import Comments from '../../components/Comments/Comments'
import Patrons from '../../components/Patrons/Patrons'
import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import Banner from '../../components/Banner/Banner'
import Image1 from '../../assets/banner/heroBanner.png'
import Newsletter from '../../components/Newsletter/Newsletter'
import AboutConference from '../../components/AboutConference/AboutConference'

const Home = () => {
  const eventDate = new Date('April 4, 2024 10:00:00')
  return (
    <>
      <Banner
        url={Image1}
        title="KONFERENCJA"
        main="UWAGA! SMARTFON"
        addLine1="4 kwietnia 2024"
        addLine2="ICE Kraków"
      />
      <AboutConference />
      <PreviousEdition />
      <Comments isLandingPage={false} />
      <Patrons />
      <Newsletter />
    </>
  )
}

export default Home
