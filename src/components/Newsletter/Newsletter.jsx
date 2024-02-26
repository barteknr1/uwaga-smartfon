import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import Section from '../Section/Section'
import css from './Newsletter.module.css'
import sprite from '../../assets/svg/sprite.svg'
import Button from '../Button/Button'
import {useModal} from '../Modal/ModalProvider'
import TextComponent from '../FormComponents/TextComponent/TextComponent'
import CheckboxComponent from '../FormComponents/CheckboxComponent/CheckboxComponent'
import {scrollToAnchor} from '../Scroll'

const Newsletter = () => {
  const {t} = useTranslation()
  const {openModal, setModalContent, closeModal} = useModal()
  const [formData, setFormData] = useState({
    email: '',
    isChecked: false,
  })
  const [errors, setErrors] = useState([])

  const handleChange = (event, inputType) => {
    const value =
      inputType === 'isChecked' ? event.target.checked : event.target.value
    setFormData((prevData) => ({
      ...prevData,
      [inputType]: value,
    }))
  }

  const handleClearInput = (inputType) => {
    setFormData((prevData) => ({...prevData, [inputType]: ''}))
    setErrors((prevErrors) => prevErrors.filter((error) => error !== inputType))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const {email, isChecked} = formData
    const newErrors = []
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!isChecked) newErrors.push('checkbox')
    setErrors(newErrors)
    if (newErrors.length === 0) {
      setModalContent(
        <div>
          <h2>header</h2>
          <p>paragraf</p>
          <Button
            type="button"
            variant="secondary"
            content={'button1'}
            onClick={() => {
              scrollToAnchor('newsletter')
              closeModal(false)
            }}
          />
        </div>
      )
      openModal()
      setFormData({
        name: '',
        email: '',
        role: '',
        customRole: '',
        workshop: '',
        isChecked: false,
      })
      setErrors([])
    }
  }
  return (
    <Section
      sectionClass={css.newsletter}
      titleClass={css.newsletterTitle}
      title={t('newsletter.title')}
      id="newsletter"
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
          <div className={css.textboxBox}>
            <TextComponent
              label="email"
              placeholder="email"
              value={formData.email}
              type="email"
              errors={errors}
              onChange={(e) => handleChange(e, 'email')}
              onClear={() => handleClearInput('email')}
            />
          </div>
          <div className={css.checkboxBox}>
            <CheckboxComponent
              value={formData.isChecked}
              onChange={(e) => handleChange(e, 'isChecked')}
              error="checkbox"
              errors={errors}
            />
          </div>
          {errors.length > 0 && (
            <p className={css.errorText}>{t('newsletter.error')}</p>
          )}
          <Button
            variant="secondary"
            content={t('newsletter.title')}
            type="submit"
            disabled={!formData.isChecked}
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
