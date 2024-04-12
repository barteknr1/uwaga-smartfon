// Program.js
import {useState} from 'react'
import Section from '../Section/Section'
import css from './Program.module.css'
import SingleSchedule from './SingleSchedule'
import {useTranslation} from 'react-i18next'

const Program = () => {
  const [expandedDetails, setExpandedDetails] = useState(Array(2).fill(false))

  const {t} = useTranslation()

  const toggleDetails = (index) => {
    const newExpandedDetails = [...expandedDetails]
    newExpandedDetails[index] = !newExpandedDetails[index]
    setExpandedDetails(newExpandedDetails)
  }

  const scheduleData = [
    {
      scheduleTime: '8:00-9:00',
      scheduleText: 'Rejestracja uczestników. ',
      /* additionalText:
        'Lorem ipsum dolor sit amet consectetur.Lacus sed tempor cursus sodales massa malesuada aliquam.Lorem ipsum dolor sit amet consectetur.Lacus sed tempor cursus sodales massa malesuada aliquam.Lorem ipsum dolor sit amet consectetur.Lacus sed tempor cursus sodales massa malesuada aliquam. ',*/
    },
    {
      scheduleTime: '9:00-9:15',
      scheduleText: 'Otwarcie konferencji ',
      /*additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    */
    },
    {
      scheduleTime: '9:15 - 10:00',
      scheduleText: "Keynote speaker - dr Catherine L'Ecuyer.",
      /*additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    */
    },
    {
      scheduleTime: '10:00 - 11:15',
      scheduleText: 'I sesja panelowa ',
      additionalText:
        'Panel 1  Zdrowie psychiczne Młodego Pokolenia \nPanel 2  Rodzic wspierający \nPanel 3 Jak technologia planuje zbawić świat?',
    },
    {
      scheduleTime: '11:15 - 11:30',
      scheduleText: 'Przerwa kawowa ',
      /* additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    */
    },
    {
      scheduleTime: '11:30 - 13:00',
      scheduleText: 'II sesja panelowa ',
      additionalText:
        '11:30-12:00 - Wykład - prof. Mariusz Jędrzejko\n12:15-12:45 - Wykład - prof. Bogusław Śliwerski\nPanel 4 Rola ojca w kształtowaniu uważności technologicznej\nPanel 5 Pornografia – zwykła rozrywka, czy cywilizacyjne zagrożenie?',
    },
    {
      scheduleTime: '13:00 - 14:00 ',
      scheduleText: 'Lunch',
      /* additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    */
    },
    {
      scheduleTime: '10:00 - 11:15',
      scheduleText: 'I sesja panelowa ',
      additionalText:
        '14:00-14:30 - Wykład - dr Roman Solecki\n14:45-15:15 - Wykład - Magdalena Bigaj\n15:15-16:30 - Czy istnieje statut idealny?\nPanel 7 Profilaktyka cyberuzależnień\nPanel 8 Srebrna gospodarka a świat cyfrowy',
    },
    {
      scheduleTime: '16:30 - 16:40',
      scheduleText: ' Podsumowanie konferencji',
      /* additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    */
    },
    {
      scheduleTime: '16:45 - 18:00',
      scheduleText: '  Warsztaty',
      /* additionalText:
        'Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. Lorem ipsum dolor sit amet consectetur. Lacus sed tempor cursus sodales massa malesuada aliquam. ',
    */
    },
  ]

  return (
    <Section
      sectionClass={css.program}
      titleClass={css.programTitle}
      title={t('program.title')}
      id="program"
    >
      <div className={css.container}>
        <div className={css.titleContainer}>
          <p className={css.programSubTitle}>4 kwietnia 2024</p>
        </div>

        <div className={css.scheduleContainer}>
          {scheduleData.map((data, index) => (
            <SingleSchedule
              key={index}
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
