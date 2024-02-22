import Section from '../Section/Section'
import css from './NoProgram.module.css'
import {useTranslation} from 'react-i18next'

const NoProgram = () => {
  const {t} = useTranslation()
  return (
    <Section
      sectionClass={css.noProgram}
      titleClass={css.noProgramTitle}
      title={t('noProgram.title')}
      i
    >
      <p className={css.text}>{t('noProgram.paragraph')}</p>
    </Section>
  )
}

export default NoProgram