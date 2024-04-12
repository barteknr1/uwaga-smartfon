import Section from '../Section/Section'
import css from './OurVolunteers.module.css'
import SingleVolunteer from './SingleVolunteer'
import dataVolunteer from './dataVolunteer'

const OurVolunteers = () => {
  return (
    <Section
      sectionClass={css.ourVolunteers}
      titleClass={css.ourVolunteersTitle}
      title="Nasi wolontariusze"
      id="our_volunteers"
    >
      <div className={css.ourVolunteersContainer}>
        {dataVolunteer.map((data, index) => (
          <SingleVolunteer key={index} {...data} />
        ))}
      </div>
    </Section>
  )
}
export default OurVolunteers
