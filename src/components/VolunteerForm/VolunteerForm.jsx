import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'
import css from './VolunteerForm.module.css'
import {useModal} from '../Modal/ModalProvider'

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
            <div
              key={inputType}
              className={`${css.volunteerFormBox} ${
                errors.includes(inputType) && css.volunteerFormBoxError
              }`}
            >
              <label
                className={`${css.textbox} ${
                  errors.includes(inputType) && css.textboxError
                }`}
                htmlFor={inputType}
              >
                {t(`volunteerForm.${inputType}`)}
              </label>
              <input
                placeholder={t(`volunteerForm.${inputType}`)}
                className={css.volunteerFormInput}
                id={inputType}
                type={inputType === 'email' ? 'email' : 'text'}
                value={formData[inputType]}
                onChange={(event) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    [inputType]: event.target.value,
                  }))
                }
              />
              <button
                type="button"
                className={css.svgTextButton}
                onClick={() => handleClearInput(inputType)}
              >
                {!errors.includes(inputType) ? (
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
          ))}
        </fieldset>
        <div className={css.checkboxBox}>
          <input
            className={css.checkbox}
            id="checkbox"
            type="checkbox"
            checked={formData.isChecked}
            onChange={() =>
              setFormData((prevData) => ({
                ...prevData,
                isChecked: !prevData.isChecked,
              }))
            }
          />
          <div className={css.checkMarkBox}>
            <span
              className={`${css.checkMark} ${
                errors.includes('checkbox') && css.checkMarkError
              }`}
            ></span>
          </div>
          <label
            className={`${css.checkboxText} ${
              errors.includes('checkbox') &&
              !formData.isChecked &&
              css.checkboxTextError
            }`}
            htmlFor="checkbox"
          >
            {t('volunteerForm.agreement')}
          </label>
        </div>
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
