import Comments from '../../components/Comments/Comments'
import Patrons from '../../components/Patrons/Patrons'
import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import Banner from '../../components/Banner/Banner'
import Image1 from '../../assets/banner/heroBanner.png'

const Home = () => {
  return (
    <>
      <Banner
        url={Image1}
        title="KONFERENCJA"
        main="UWAGA! SMARTFON"
        addLine1="4 kwietnia 2024"
        addLine2="ICE Kraków"
      ></Banner>
      <PreviousEdition />
      <Comments />
      <Patrons />
    </>
  )
}

export default Home
