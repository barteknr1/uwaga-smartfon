import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import Button from '../Button/Button'
import css from './VolunteerForm.module.css'
import {useModal} from '../Modal/ModalProvider'
import TextComponent from '../FormComponents/TextComponent/TextComponent'
import CheckboxComponent from '../FormComponents/CheckboxComponent/CheckboxComponent'

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
    const {email, name, area, position, isChecked} = formData
    const newErrors = []

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!name.trim() || !/\s/.test(name)) newErrors.push('name')
    if (!area.trim()) newErrors.push('area')
    if (!position.trim()) newErrors.push('position')
    if (!isChecked) newErrors.push('checkbox')

    setErrors(newErrors)
    if (newErrors.length === 0) {
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
      <div className={css.ellipse}></div>
      <form className={css.volunteerFormContainer} onSubmit={handleSubmit}>
        <fieldset className={css.volunteerFormInputContainer}>
          {['name', 'email', 'position', 'area'].map((inputType) => (
            <TextComponent
              key={inputType}
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
