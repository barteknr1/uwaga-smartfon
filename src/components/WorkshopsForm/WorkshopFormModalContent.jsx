import {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import Button from '../Button/Button'
import {scrollToAnchor} from '../Scroll'
import css from './WorkshopsForm.module.css'
import TextComponent from '../FormComponents/TextComponent/TextComponent'
import SelectComponent from '../FormComponents/SelectComponent.jsx/SelectComponent'
import RadioComponent from '../FormComponents/RadioComponent/RadioComponent'
import CheckboxComponent from '../FormComponents/CheckboxComponent/CheckboxComponent'
import axios from 'axios'
import Loader from '../Loader/Loader'

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
  const {openModal, isModalVisible, setModalContent, closeModal} = useModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    workshop: '',
    customRole: '',
    isChecked: false,
  })
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const workshopUrl = import.meta.env.VITE_WORKSHOP
    const {email, name, role, workshop, customRole} = formData
    const newErrors = []

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!name.trim() || !/\s/.test(name)) newErrors.push('name')
    if (!formData.isChecked) newErrors.push('checkbox')
    if (role === '') newErrors.push('role')
    if (role === 'Inne' && !customRole.trim()) newErrors.push('customRole')
    if (workshop === '') newErrors.push('workshop')

    setErrors(newErrors)

    if (newErrors.length === 0) {
      setIsLoading(true)

      try {
        const response = await axios.post(workshopUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          redirect: 'follow',
          timeout: 10000, // Timeout after 10 seconds
        })

        if (response.status === 200) {
          setIsLoading(false)
          setModalContent(
            <div className={css.workshopsSuccessModalContainer}>
              <h2 className={css.workshopsSuccessModalHeader}>
                {t('workshopsForm.titleModal')}
              </h2>
              <p className={css.workshopsSuccessModalParagraph}>
                {t('workshopsForm.textModal1')}
              </p>
              <Button
                type="button"
                variant="secondary"
                content={t('workshopsForm.buttonModal1')}
                onClick={() => {
                  scrollToAnchor('program')
                  closeModal(false)
                }}
              />
              <p className={css.workshopsSuccessModalParagraph}>
                {t('workshopsForm.textModal2')}
              </p>
              <Button
                type="button"
                variant="secondary"
                content={t('workshopsForm.buttonModal2')}
                onClick={() => {
                  scrollToAnchor('newsletter')
                  closeModal(false)
                }}
              />
            </div>
          )
          openModal()
        } else {
          throw new Error('Network response was not ok.')
        }
      } catch (error) {
        setIsLoading(false)
        setModalContent(
          <div className={css.workshopsSuccessModalContainer}>
            <h2 className={css.workshopsSuccessModalHeader}>
              {t('newsletter.titleError')}
            </h2>
            <p className={css.workshopsSuccessModalParagraph}>
              {t('newsletter.textError')}
            </p>
          </div>
        )
        openModal()
      }
    }
  }

  const handleChange = (event, inputType) => {
    const value =
      inputType === 'isChecked' ? event.target.checked : event.target.value
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
      <Loader isLoading={isLoading} />
      <h4 className={css.workshopsFormHeader}>{t('workshopsForm.header')}</h4>
      <form className={css.workshopsForm} onSubmit={handleSubmit}>
        <fieldset className={css.workshopsFormFieldset}>
          <TextComponent
            label="name"
            placeholder="name"
            name="name"
            value={formData.name}
            type="text"
            errors={errors}
            onChange={(e) => handleChange(e, 'name')}
            onClear={() => handleClearInput('name')}
          />
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
          <SelectComponent
            value={formData.role}
            name="role"
            onChange={(e) => handleChange(e, 'role')}
            options={selectOptions}
            error="role"
            errors={errors}
            condition={formData.role === 'Inne'}
          />
          {formData.role === 'Inne' && (
            <TextComponent
              label="customRole"
              name="customRole"
              placeholder="customRolePlaceholder"
              value={formData.customRole}
              type="text"
              errors={errors}
              onChange={(e) => handleChange(e, 'customRole')}
              onClear={() => handleClearInput('customRole')}
            />
          )}
          <p className={css.workshopsParagraph}>
            {t('workshopsForm.paragraph')}
          </p>
          <RadioComponent
            error="workshop"
            name="workshop"
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
