import PreviousEdition from '../../components/PreviousEdition/PreviousEdition'
import CountdownTimer from '../../components/Counter/Counter'
const Home = () => {
  const eventDate = new Date('April 4, 2024')
  return (
    <>
      <div>Home</div>
      <CountdownTimer eventDate={eventDate}></CountdownTimer>
      <PreviousEdition />
    </>
  )
}

export default Home
