import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import Section from '../Section/Section'
import css from './Newsletter.module.css'
import sprite from '../../assets/svg/sprite.svg'
import Button from '../Button/Button'

const Newsletter = () => {
  const {t} = useTranslation()
  const [inputText, setInputText] = useState('')
  const handleClearInput = () => {
    setInputText('')
  }
  return (
    <Section
      sectionClass={css.newsletter}
      titleClass={css.newsletterTitle}
      title={t('newsletter.title')}
    >
      <div className={css.newsletterContainer}>
        <div className={`${css.newsletterBox} ${css.letterBox}`}>
          <p className={css.firstText}>{t('newsletter.text1')}</p>
          <p className={css.secondText}>
            {t('newsletter.text2')}{' '}
            <span className={css.bold}>{t('newsletter.bold1')}</span>{' '}
            {t('newsletter.text3')}{' '}
            <span className={css.bold}>{t('newsletter.bold2')}</span>{' '}
            {t('newsletter.text4')}
          </p>
          <div className={css.textboxBox}>
            <label className={css.textbox} htmlFor="textbox">
              Adres e-mail:
            </label>
            <input
              className={css.inputText}
              id="textbox"
              type="text"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
            />
            <button className={css.svgTextButton} onClick={handleClearInput}>
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.checkboxBox}>
            <input className={css.checkbox} id="checkbox" type="checkbox" />
            <div className={css.checkMarkBox}>
              <span className={css.checkMark}></span>
            </div>
            <label className={css.checkboxText} htmlFor="checkbox">
              {t('newsletter.agreement')}
            </label>
          </div>
          <Button variant="secondary" content={t('newsletter.title')} />
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
