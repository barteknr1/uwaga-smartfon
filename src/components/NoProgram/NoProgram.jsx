import Section from '../Section/Section'
import css from './NoProgram.module.css'
import {useTranslation} from 'react-i18next'

const NoProgram = ({title}) => {
  const {t} = useTranslation()
  return (
    <Section
      sectionClass={css.noProgram}
      titleClass={css.noProgramTitle}
      title={t('noProgram.title')}
    >
      {title ? <h2 className={`${css.noProgramTitle}`}>{title}</h2> : null}
      <p className={css.text}>Program pojawi się już wkrótce!</p>
    </Section>
  )
}

export default NoProgram
