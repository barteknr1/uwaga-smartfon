// Program.js
import {useState, useEffect} from 'react'
import Section from '../Section/Section'
import css from './Program.module.css'
import SingleSchedule from './SingleSchedule'

const Program = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 756)
  const [expandedDetails, setExpandedDetails] = useState(Array(2).fill(false))

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 756)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleDetails = (index) => {
    const newExpandedDetails = [...expandedDetails]
    newExpandedDetails[index] = !newExpandedDetails[index]
    setExpandedDetails(newExpandedDetails)
  }

  const scheduleData = [
    {
      scheduleTime: '13:45',
      scheduleText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur.Lacus sed tempor cursus sodales massa malesuada aliquam.Lorem ipsum dolor sit amet consectetur.Lacus sed tempor cursus sodales massa malesuada aliquam.Lorem ipsum dolor sit amet consectetur.Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    },
    {
      scheduleTime: '13:45',
      scheduleText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    },
    {
      scheduleTime: '13:45',
      scheduleText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    },
    {
      scheduleTime: '13:45',
      scheduleText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    },
    {
      scheduleTime: '13:45',
      scheduleText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    },
  ]

  return (
    <Section sectionClass={css.program}>
      <div className={css.container}>
        <div className={css.titleContainer}>
          <h1 className={css.programTitle}>Program</h1>
          <h2 className={css.programSubTitle}>4 kwietnia 2024</h2>
        </div>

        <div className={css.scheduleContainer}>
          {scheduleData.map((data, index) => (
            <SingleSchedule
              key={index}
              isMobileView={isMobileView}
              expandedDetails={expandedDetails[index]}
              onToggleDetails={() => toggleDetails(index)}
              {...data}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Program
