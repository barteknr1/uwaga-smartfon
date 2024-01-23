import Section from '../Section/Section'
import css from './OurVolunteers.module.css'
import SingleVolunteer from './SingleVolunteer'
import Karolina from '../../assets/images/volunteers/Karolina.png'
import Bartek from '../../assets/images/volunteers/Bartek.png'
import Patrycja from '../../assets/images/volunteers/Patrycja.png'
import Piotr from '../../assets/images/volunteers/Piotr.png'
import Julia from '../../assets/images/volunteers/Julia.png'
import Wiktoria from '../../assets/images/volunteers/Wiktoria.png'
import Joanna from '../../assets/images/volunteers/Joanna.png'
import Sara from '../../assets/images/volunteers/Sara.png'
import Ewelina from '../../assets/images/volunteers/Ewelina.png'
import Vincent from '../../assets/images/volunteers/Vincent.png'
import Dagmara from '../../assets/images/volunteers/Dagmara.png'

const OurVolunteers = () => {
  const dataVolunteer = [
    {
      name: 'Karolina Bożemska',
      teamRole: 'UX/UI Designer ',
      teamRole2: 'Project Manager',
      images: Karolina,
    },
    {
      name: 'Bartek Barański',
      teamRole: 'Developer',
      images: Bartek,
    },
    {
      name: 'Patrycja Bruzgo',
      teamRole: 'DUX/UI Designer',
      images: Patrycja,
    },
    {
      name: 'Piotr Drechsler',
      teamRole: 'Developer',
      images: Piotr,
    },
    {
      name: 'Julia Kaim',
      teamRole: 'Developer',
      images: Julia,
    },
    {
      name: 'Wiktoria Kaim',
      teamRole: 'Social Media Specialist',
      images: Wiktoria,
    },

    {
      name: 'Joanna Regulska',
      teamRole: 'UX/UI Designer',
      images: Joanna,
    },
    {
      name: 'Sara Sagan',
      teamRole: 'UX/UI Designer ',
      teamRole2: 'Graphic Design Lead',
      images: Sara,
    },
    {
      name: 'Ewelina Suszczyńska',
      teamRole: 'Social Media Specialist',
      images: Ewelina,
    },
    {
      name: 'Vincent Słomiński',
      teamRole: 'Lead Developer',
      images: Vincent,
    },
    {
      name: 'Dagmara Sobczak',
      teamRole: 'Developer',
      images: Dagmara,
    },
  ]

  return (
    <Section
      sectionClass={css.ourVolunteers}
      titleClass={css.ourVolunteersTitle}
      title="Nasi Wolontariusze"
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
