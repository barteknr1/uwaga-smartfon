import Section from '../Section/Section'
import css from './NoProgram.module.css'

const NoProgram = () => {
  return (
    <Section sectionClass={css.noProgram}>
      <h1 className={css.noProgramTitle}>Program</h1>

      <h2 className={css.text}>Program pojawi się już wkrótce!</h2>
    </Section>
  )
}

export default NoProgram
