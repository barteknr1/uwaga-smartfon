import {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import css from './Counter.module.css'

const CountdownTimer = () => {
  const {t} = useTranslation()
  const eventDate = new Date('April 4, 2025 10:00:00')

  const calculateTimeRemaining = (targetDate) => {
    const currentDate = new Date()
    const difference = targetDate - currentDate

    const days = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0)
    const hours = Math.max(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      0
    )
    const minutes = Math.max(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      0
    )

    return {days, hours, minutes}
  }
  const formatTime = (time) => (time < 10 ? `0${time}` : time)

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(eventDate)
  )

  useEffect(() => {
    const updateTimer = () => {
      const remainingTime = calculateTimeRemaining(eventDate)
      setTimeRemaining(remainingTime)

      // If the event has already taken place, stop the countdown by setting the remaining time to 0
      if (
        remainingTime.days === 0 &&
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0
      ) {
        clearInterval(intervalId)
        setTimeRemaining({days: 0, hours: 0, minutes: 0})
      }
    }

    const intervalId = setInterval(updateTimer, 1000)

    // Call the function that updates the timer on startup to avoid delay
    updateTimer()

    return () => clearInterval(intervalId)
  }, []) // An empty dependency table means that the useEffect hook will only be called once, on the first rendering

  return (
    <div className={css.TimeRemaining_Box}>
      <div className={css.TimeRemaining_InfoBox}>
        <span className={css.TimeRemaining_Info}>{t('counter.days')}</span>
        <span className={css.TimeRemaining_Info}>{t('counter.hours')}</span>
        <span className={css.TimeRemaining_Info}>{t('counter.minutes')}</span>
      </div>
      <div className={css.TimeRemaining_NumBox}>
        <span className={css.TimeRemaining_Num}>{timeRemaining.days}</span>
        <span className={css.dots}>:</span>
        <span className={css.TimeRemaining_Num}>
          {formatTime(timeRemaining.hours)}
        </span>
        <span className={css.dots}>:</span>
        <span className={css.TimeRemaining_Num}>
          {formatTime(timeRemaining.minutes)}
        </span>
      </div>
    </div>
  )
}

export default CountdownTimer
