import Section from '../Section/Section'
import css from './Newsletter.module.css'
import sprite from '../../assets/svg/sprite.svg'
import Button from '../Button/Button'

const Newsletter = () => {
  return (
    <Section
      sectionClass={css.newsletter}
      titleClass={css.newsletterTitle}
      title="Zapisz się do newslettera"
    >
      <div className={css.newsletterContainer}>
        <div className={`${css.newsletterBox} ${css.letterBox}`}>
          <blockquote className={css.firstText}>
            Subskrybuj nasz newsletter, aby być na bieżąco z naszymi działaniami
            i otrzymywać wartościowe treści!
          </blockquote>
          <blockquote className={css.secondText}>
            Osoby, które zapiszą się do newslettera, otrzymają między innymi
            możliwość bezpłatnego pobrania{' '}
            <span className={css.bold}>Bezpiecznego Statutu Szkoły</span> oraz{' '}
            <span className={css.bold}>
              Regulaminu Korzystania z Mediów Cyfrowych w Szkole
            </span>
            , które zostały przygotowane przez doktora nauk prawnych Tomasza
            Lewandowskiego
          </blockquote>
          <div className={css.textboxBox}>
            <label className={css.textbox} htmlFor="textbox">
              Adres e-mail:
            </label>
            <input className={css.inputText} id="textbox" type="text" />
            <svg className={css.svgTextBox}>
              <use href={sprite + '#trailing-icon'} />
            </svg>
          </div>
          <div className={css.checkboxBox}>
            <input className={css.checkbox} id="checkbox" type="checkbox" />
            <span className={css.checkMark}></span>
            <label className={css.checkboxText} htmlFor="checkbox">
              Wyrażam zgodę na przetwarzanie moich danych osobowych.
            </label>
          </div>
          <Button variant="secondary" content="Zapisz się do newslettera" />
        </div>
        <div className={`${css.newsletterBox} ${css.svgBox}`}>
          <div className={css.newsletterSvg}>
            <svg className={css.svgLetter}>
              <use href={sprite + '#icon-newsletter-thin-1'} />
            </svg>
            <svg className={css.svgPurple}>
              <use href={sprite + '#newsletterPurpleCloud'} />
            </svg>
            <svg className={css.svgPink}>
              <use href={sprite + '#icon-newsletterCloudPink'} />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default Newsletter
