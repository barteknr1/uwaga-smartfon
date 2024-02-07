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
import Kasia from '../../assets/images/volunteers/Kasia.png'
import Iwona from '../../assets/images/volunteers/Iwona.png'
import Diana from '../../assets/images/volunteers/Diana.jpg'

const OurVolunteers = () => {
  const dataVolunteer = [
    {
      name: 'Karolina Bożemska',
      teamRole: ['UX/UI Designer', 'Project Menager'],
      linkedinUrl:
        'https://www.linkedin.com/in/karolina-bo%C5%BCemska-a4611926a/',
      images: Karolina,
    },
    {
      name: 'Bartek Brański',
      teamRole: ['Developer'],
      linkedinUrl: 'https://www.linkedin.com/in/barteknr1/',
      images: Bartek,
    },
    {
      name: 'Patrycja Bruzgo',
      teamRole: ['UX/UI Designer'],
      linkedinUrl: 'https://www.linkedin.com/in/patrycja-bruzgo/',
      images: Patrycja,
    },
    {
      name: 'Piotr Drechsler',
      teamRole: ['Developer'],
      linkedinUrl: 'https://www.linkedin.com/in/piotr-drechsler/',
      images: Piotr,
    },
    {
      name: 'Julia Kaim',
      teamRole: ['Developer'],
      linkedinUrl: 'https://www.linkedin.com/in/julia-kaim-1b5b24267/',
      images: Julia,
    },
    {
      name: 'Wiktoria Kaim',
      teamRole: ['Social Media Specialist'],
      linkedinUrl: 'https://www.linkedin.com/in/wiktoria-kaim-14b4ba26a/',
      images: Wiktoria,
    },
    {
      name: 'Diana Kołodziejczyk',
      teamRole: ['Social Media Specialist'],
      linkedinUrl: 'https://www.linkedin.com/in/dianakolodziejczyk/',
      images: Diana,
    },
    {
      name: 'Iwona Kozioł',
      teamRole: ['QA Engineer'],
      linkedinUrl: 'https://www.linkedin.com/in/iwona-koziol/',
      images: Iwona,
    },

    {
      name: 'Joanna Regulska',
      teamRole: ['UX/UI Designer'],
      linkedinUrl: 'https://www.linkedin.com/in/joanna-regulska/',
      images: Joanna,
    },
    {
      name: 'Sara Sagan',
      teamRole: ['UX/UI Designer', 'Project Menager'],
      linkedinUrl: 'https://www.linkedin.com/in/sara-sagan01/',
      images: Sara,
    },
    {
      name: 'Dagmara Sobczak',
      teamRole: ['Developer'],
      linkedinUrl: 'https://www.linkedin.com/in/dagmara-sobczak-746076279/',
      images: Dagmara,
    },
    {
      name: 'Ewelina Suszczyńska',
      teamRole: ['Social Media Specialist'],
      linkedinUrl: 'https://www.linkedin.com/in/ewelina-suszczy%C5%84ska/',
      images: Ewelina,
    },
    {
      name: 'Vincent Słomiński',
      teamRole: ['Lead Developer'],
      linkedinUrl: 'https://www.linkedin.com/in/vincent-slominski/',
      images: Vincent,
    },
    {
      name: 'Kasia Kołodziejska',
      teamRole: ['QA Engineer'],
      linkedinUrl: 'https://www.linkedin.com/in/katarzyna-kolodziejska1985/',
      images: Kasia,
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
