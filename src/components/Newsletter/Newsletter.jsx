import {useNavigate} from 'react-router-dom'
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
import axios from 'axios'
import Loader from '../Loader/Loader'

const Newsletter = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const {openModal, setModalContent, closeModal} = useModal()
  const [formData, setFormData] = useState({
    email: '',
    isChecked: false,
  })
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newsletterUrl = import.meta.env.VITE_NEWSLETTER
    const {email} = formData
    const newErrors = []
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!formData.isChecked) newErrors.push('checkbox')

    setErrors(newErrors)

    if (newErrors.length === 0) {
      setIsLoading(true)
      try {
        const response = await axios.post(newsletterUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          redirect: 'follow',
          timeout: 10000, // Timeout after 10 seconds
        })

        if (response.status === 200) {
          setIsLoading(false)
          setModalContent(
            <div className={css.newsletterSuccessModalContainer}>
              <h2 className={css.newsletterSuccessModalHeader}>
                {t('newsletter.titleModal')}
              </h2>
              <p className={css.newsletterSuccessModalParagraph}>
                {t('newsletter.textModal')}
              </p>
              <Button
                type="button"
                variant="secondary"
                content={t('newsletter.buttonModal')}
                onClick={() => {
                  closeModal(false)
                  navigate('/landing-page')
                  setTimeout(() => scrollToAnchor('program'), 1)
                }}
              />
            </div>
          )
          openModal()
          setFormData({
            email: '',
            isChecked: false,
          })
          setErrors([])
        } else {
          throw new Error('Network response was not ok.')
        }
      } catch (error) {
        setIsLoading(false)
        setModalContent(
          <div className={css.newsletterSuccessModalContainer}>
            <h2 className={css.newsletterSuccessModalHeader}>
              {t('newsletter.titleError')}
            </h2>
            <p className={css.newsletterSuccessModalParagraph}>
              {t('newsletter.textError')}
            </p>
          </div>
        )
        openModal()
      }
    }
  }
  return (
    <Section
      sectionClass={css.newsletter}
      titleClass={css.newsletterTitle}
      title={t('newsletter.title')}
      id="newsletter"
    >
      <Loader isLoading={isLoading} />
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
              name="email"
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
              variant="consent"
              name="newsletterConsent"
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
