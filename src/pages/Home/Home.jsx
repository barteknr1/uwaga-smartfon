import Comments from '../../components/Comments/Comments'
import Patrons from '../../components/Patrons/Patrons'
import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import Banner from '../../components/Banner/Banner'
import Image1 from '../../assets/banner/heroBanner.png'
import CountdownTimer from '../../components/Counter/Counter'

const Home = () => {
  const eventDate = new Date('April 4, 2024')
  return (
    <>
      <div>Home</div>
      <Banner
        url={Image1}
        title="KONFERENCJA"
        main="UWAGA! SMARTFON"
        addLine1="4 kwietnia 2024"
        addLine2="ICE Kraków"
      ></Banner>
      <CountdownTimer eventDate={eventDate}></CountdownTimer>

      <PreviousEdition />
      <Comments />
      <Patrons />
    </>
  )
}

export default Home
