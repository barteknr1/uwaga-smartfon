import {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import css from './Counter.module.css'

const CountdownTimer = () => {
  const {t} = useTranslation()
  const eventDate = new Date('April 4, 2024 10:00:00')

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
  const formatTime = (time) => (time < 10 ? `0${time}` : time)

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
