import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import Button from '../Button/Button'
import css from './VolunteerForm.module.css'
import {useModal} from '../Modal/ModalProvider'
import TextComponent from '../FormComponents/TextComponent/TextComponent'
import CheckboxComponent from '../FormComponents/CheckboxComponent/CheckboxComponent'
import axios from 'axios'
import Loader from '../Loader/Loader'

const VolunteerForm = () => {
  const {t} = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    area: '',
    isChecked: false,
  })
  const [errors, setErrors] = useState([])
  const {openModal, setModalContent, isModalVisible} = useModal()
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
    const volunteerUrl = import.meta.env.VITE_VOLUNTEER
    const {email, name, area, position} = formData
    const newErrors = []

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!name.trim() || !/\s/.test(name)) newErrors.push('name')
    if (!area.trim()) newErrors.push('area')
    if (!position.trim()) newErrors.push('position')
    if (!formData.isChecked) newErrors.push('checkbox')

    setErrors(newErrors)

    if (newErrors.length === 0) {
      setIsLoading(true)

      try {
        const response = await axios.post(volunteerUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          redirect: 'follow',
          timeout: 10000, // Timeout after 10 seconds
        })

        if (response.status === 200) {
          setIsLoading(false)
          setModalContent(
            <div className={css.volunteerModalContainer}>
              <h2 className={css.volunteerModalHeader}>
                {t('volunteerForm.modalHeader')}
              </h2>
              <p className={css.volunteerModalParagraph}>
                {t('volunteerForm.modalParagraph')}
              </p>
            </div>
          )
          openModal()
        } else {
          throw new Error('Network response was not ok.')
        }
      } catch (error) {
        setIsLoading(false)
        setModalContent(
          <div className={css.volunteerModalContainer}>
            <h2 className={css.volunteerModalHeader}>
              {t('newsletter.titleError')}
            </h2>
            <p className={css.volunteerModalParagraph}>
              {t('newsletter.textError')}
            </p>
          </div>
        )
        openModal()
      }
    }
  }

  useEffect(() => {
    if (!isModalVisible) {
      setFormData({
        name: '',
        email: '',
        position: '',
        area: '',
        isChecked: false,
      })
      setErrors([])
    }
  }, [isModalVisible, setFormData])

  return (
    <Section
      sectionClass={css.volunteerForm}
      titleClass={css.volunteerFormTitle}
      title={t('volunteerForm.title')}
      id="volunteer_form"
    >
      <Loader isLoading={isLoading} />
      <div className={css.ellipse}></div>
      <form className={css.volunteerFormContainer} onSubmit={handleSubmit}>
        <fieldset className={css.volunteerFormInputContainer}>
          {['name', 'email', 'position', 'area'].map((inputType) => (
            <TextComponent
              key={inputType}
              name={inputType}
              label={inputType}
              placeholder={inputType}
              value={formData[inputType]}
              type={inputType === 'email' ? 'email' : 'text'}
              errors={errors}
              onChange={(e) => handleChange(e, inputType)}
              onClear={() => handleClearInput(inputType)}
            />
          ))}
        </fieldset>
        <CheckboxComponent
          value={formData.isChecked}
          onChange={(e) => handleChange(e, 'isChecked')}
          error="checkbox"
          errors={errors}
        />
        {errors.length > 0 && (
          <p className={css.errorText}>{t('volunteerForm.error')}</p>
        )}
        <Button
          variant="primary"
          content={t('volunteerForm.button')}
          type="submit"
        />
      </form>
      <div className={css.ellipse2}></div>
    </Section>
  )
}

export default VolunteerForm
