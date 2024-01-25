import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import Section from '../Section/Section'
import css from './Newsletter.module.css'
import sprite from '../../assets/svg/sprite.svg'
import Button from '../Button/Button'

const Newsletter = () => {
  const {t} = useTranslation()
  const [email, setEmail] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [error, setError] = useState(false)

  const handleClearInput = () => {
    setEmail('')
    setError(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailContain = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailContain.test(email)) {
      console.log('Email:', email, 'Consent:', isChecked, 'Err:', error)
      setError(false)
    } else {
      console.log('Email:', email, 'Consent:', isChecked, 'Err:', error)
      setError(true)
      console.error('Please enter a valid e-mail address')
    }
    if (!isChecked) {
      setError(true)
    }
  }
  return (
    <Section
      sectionClass={css.newsletter}
      titleClass={css.newsletterTitle}
      title={t('newsletter.title')}
    >
      <form className={css.newsletterContainer} onSubmit={handleSubmit}>
        <div className={`${css.newsletterBox} ${css.letterBox}`}>
          <p className={css.firstText}>{t('newsletter.text1')}</p>
          <p className={css.secondText}>
            {t('newsletter.text2')}{' '}
            <span className={css.bold}>{t('newsletter.bold1')}</span>{' '}
            {t('newsletter.text3')}{' '}
            <span className={css.bold}>{t('newsletter.bold2')}</span>{' '}
            {t('newsletter.text4')}
          </p>
          <div className={`${css.textboxBox} ${error && css.textboxBoxError}`}>
            <label
              className={`${css.textbox} ${error && css.textboxError}`}
              htmlFor="textbox"
            >
              Adres e-mail:
            </label>
            <input
              placeholder="Adres e-mail"
              className={css.inputText}
              id="textbox"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className={css.svgTextButton}
              type="button"
              onClick={handleClearInput}
            >
              {!error ? (
                <svg className={css.svgTextIcon}>
                  <use href={sprite + '#icon-close'} />
                </svg>
              ) : (
                <svg className={css.svgTextIcon}>
                  <use href={sprite + '#error-icon'} />
                </svg>
              )}
            </button>
          </div>
          <div className={css.checkboxBox}>
            <input
              className={css.checkbox}
              id="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div className={css.checkMarkBox}>
              <span
                className={`${css.checkMark} ${error && css.checkMarkError}`}
              ></span>
            </div>
            <label className={css.checkboxText} htmlFor="checkbox">
              {t('newsletter.agreement')}
            </label>
          </div>
          {error && <p className={css.errorText}>{t('newsletter.error')}</p>}
          <Button
            variant="secondary"
            content={t('newsletter.title')}
            type="submit"
            disabled={!isChecked}
          />
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
      </form>
    </Section>
  )
}
export default Newsletter
