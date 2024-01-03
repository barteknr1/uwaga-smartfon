import Section from '../Section/Section'
import css from './BeAVolunteer.module.css'
import Button from '../Button/Button'

const BeAVolunteer = () => {
  return (
    <Section
      sectionClass={css.BeAVolunteer}
      titleClass={css.BeAVolunteerTitle}
      title="Zostań wolonatriuszem Fundacji Projekt PL"
    >
      <div className={css.BeAVolunteerContainer}>
        <img
          className={css.BeAVolunteerImg}
          src={'../..assets/imges/BeAVoluteer'}
          alt={''}
        ></img>
        <p className={css.BeAVolunteerText}></p>
        <Button variant="secondary" content="Zostań Wolontariuszem"></Button>
      </div>
    </Section>
  )
}
export default BeAVolunteer
