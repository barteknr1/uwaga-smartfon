import Comments from '../../components/Comments/Comments'
import Patrons from '../../components/Patrons/Patrons'
import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import CountdownTimer from '../../components/Counter/Counter'
const Home = () => {
  const eventDate = new Date('April 4, 2024 10:00:00')
  return (
    <>
      <CountdownTimer eventDate={eventDate}></CountdownTimer>
      <PreviousEdition />
      <Comments />
      <Patrons />
    </>
  )
}

export default Home
