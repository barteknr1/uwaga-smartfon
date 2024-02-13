import {useState, useEffect, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import Button from '../Button/Button'
import css from './WorkshopsForm.module.css'
import sprite from '../../assets/svg/sprite.svg'
import TextComponent from '../FormComponents/TextComponent/TextComponent'
import SelectComponent from '../FormComponents/SelectComponent.jsx/SelectComponent'
import RadioComponent from '../FormComponents/RadioComponent/RadioComponent'
import CheckboxComponent from '../FormComponents/CheckboxComponent/CheckboxComponent'

const ModalContent = () => {
  const {t} = useTranslation()
  const selectOptions = [
    'Przedstawiciel organizacji',
    'Nauczyciel',
    'Rodzic',
    'Uczeń',
    'Inne',
  ]
  const radioOptions = ['Warsztat 1', 'Warsztat 2', 'Warsztat 3', 'Warsztat 4']
  const {openModal, isModalVisible, setModalContent} = useModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    workshop: '',
    customRole: '',
    isChecked: false,
  })
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email, name, role, workshop, isChecked, customRole} = formData
    const newErrors = []

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!name.trim() || !/\s/.test(name)) newErrors.push('name')
    if (!isChecked) newErrors.push('checkbox')
    if (role === '') newErrors.push('role')
    if (role === 'Inne' && !customRole.trim()) newErrors.push('customRole')
    if (workshop === '') newErrors.push('workshop')
    setErrors(newErrors)
    console.log('newErrors', newErrors)
    if (newErrors.length === 0) {
      setModalContent(
        <div className={css.workshopsSuccessModalContainer}>
          <h2 className={css.workshopsSuccessModalHeader}>
            Formularz zapisu na warsztaty został wysłany! Dziękujemy za aktywne
            dołączenie do wydarzenia Uwaga! Smartfon.
          </h2>
          <p className={css.workshopsSuccessModalParagraph}>
            Zapraszamy do zapoznania się z programem konferencji.
          </p>
          <button>Zobacz program</button>
          <p className={css.workshopsSuccessModalParagraph}>
            Przypominamy także o możliwości zapisania się do naszego newslettera
            i śledzenia na bieżąco wydarzenia w social mediach.
          </p>
          <button>Zapisz się do newslettera</button>
        </div>
      )
      openModal()
    }
  }

  const handleChange = (event, inputType) => {
    const value =
      inputType === 'isChecked' ? event.target.checked : event.target.value
    console.log('inputType:', inputType, 'value:', value, 'formData:', formData)
    setFormData((prevData) => ({
      ...prevData,
      [inputType]: value,
    }))
  }

  useEffect(() => {
    if (!isModalVisible) {
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
  }, [isModalVisible, setFormData])

  const handleClearInput = (inputType) => {
    console.log(inputType)
    setFormData((prevData) => ({...prevData, [inputType]: ''}))
    setErrors((prevErrors) => prevErrors.filter((error) => error !== inputType))
  }

  return (
    <div
      className={
        isModalVisible
          ? `${css.workshopsFormContainer} ${css.workshopsModalIsOpen}`
          : css.workshopsFormContainer
      }
    >
      <h4 className={css.workshopsFormHeader}>{t('workshopsForm.header')}</h4>
      <form className={css.workshopsForm} onSubmit={handleSubmit}>
        <fieldset className={css.workshopsFormFieldset}>
          <TextComponent
            label="name"
            placeholder="name"
            value={formData.name}
            type="text"
            errors={errors}
            onChange={(e) => handleChange(e, 'name')}
            onClear={() => handleClearInput('name')}
          />
          <TextComponent
            label="email"
            placeholder="email"
            value={formData.email}
            type="email"
            errors={errors}
            onChange={(e) => handleChange(e, 'email')}
            onClear={() => handleClearInput('email')}
          />
          <SelectComponent
            value={formData.role}
            onChange={(e) => handleChange(e, 'role')}
            options={selectOptions}
            error="role"
            errors={errors}
            condition={formData.role === 'Inne'}
          />
          {formData.role === 'Inne' && (
            <TextComponent
              label="customRole"
              placeholder="customRolePlaceholder"
              value={formData.customRole}
              type="text"
              errors={errors}
              onChange={(e) => handleChange(e, 'customRole')}
              onClear={() => handleClearInput('customRole')}
            />
          )}
          <p>{t('workshopsForm.paragraph')}</p>
          <RadioComponent
            error="workshop"
            value={formData.workshop}
            options={radioOptions}
            onChange={(e) => handleChange(e, 'workshop')}
            errors={errors}
          />
          <CheckboxComponent
            value={formData.isChecked}
            onChange={(e) => handleChange(e, 'isChecked')}
            error="checkbox"
            errors={errors}
          />
        </fieldset>
        {errors.length > 0 && (
          <p className={css.errorText}>{t('workshopsForm.error')}</p>
        )}
        <Button
          type="submit"
          content={t('workshopsForm.button')}
          variant="secondary"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default ModalContent
