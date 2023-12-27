import Section from '../Section/Section'
import css from './AboutConference.module.css'

const AboutConference = () => {
  return (
    <Section
      title="O konferencji"
      sectionClass={css.AboutConference}
      titleClass={css.AboutConferenceTitle}
    ></Section>
  )
}

export default AboutConference
