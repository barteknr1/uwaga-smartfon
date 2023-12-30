import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import css from './Counter.module.css'
const CountdownTimer = ({eventDate}) => {
  const calculateTimeRemaining = (targetDate) => {
    const currentDate = new Date()
    const difference = targetDate - currentDate

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

    return {days, hours, minutes}
  }

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(eventDate)
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(eventDate))
    }, 1000 * 60) // Update every minute

    return () => clearInterval(intervalId)
  }, [eventDate])

  return (
    <div className={css.TimeRemaining_Box}>
      <div className={css.TimeRemaining_InfoBox}>
        <h2 className={css.TimeRemaining_Info}>Dni</h2>
        <h2 className={css.TimeRemaining_Info}>Godzin</h2>
        <h2 className={css.TimeRemaining_Info}>Minut</h2>
      </div>
      <div className={css.TimeRemaining_NumBox}>
        <p className={css.TimeRemaining_Num}>{timeRemaining.days} :</p>
        <p className={css.TimeRemaining_Num}>{timeRemaining.hours} :</p>
        <p className={css.TimeRemaining_Num}>{timeRemaining.minutes}</p>
      </div>
    </div>
  )
}
CountdownTimer.propTypes = {
  eventDate: PropTypes.instanceOf(Date).isRequired,
}
export default CountdownTimer
