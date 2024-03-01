import {useNavigate} from 'react-router-dom'
import css from './ApplicationForm.module.css'
import Button from '../Button/Button'
import {useState, useEffect} from 'react'
import {useModal} from '../Modal/ModalProvider'
import {useTranslation} from 'react-i18next'
import TextComponent from '../FormComponents/TextComponent/TextComponent'
import SelectComponent from '../FormComponents/SelectComponent.jsx/SelectComponent'
import RadioComponent from '../FormComponents/RadioComponent/RadioComponent'
import CheckboxComponent from '../FormComponents/CheckboxComponent/CheckboxComponent'
import {scrollToAnchor} from '../Scroll'

const ApplicationForm = () => {
  const {t} = useTranslation()
  const {isModalVisible, setModalContent, closeModal, openModal} = useModal()
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    city: '',
    role: '',
    customRole: '',
    certificate: false,
    permission: false,
    menu: 'traditional',
  })
  const [errors, setErrors] = useState([])

  const selectOptions = [
    'Przedstawiciel organizacji',
    'Nauczyciel',
    'Rodzic',
    'Uczeń',
    'Inne',
  ]
  const radioOptions = ['traditional', 'vegetarian']

  useEffect(() => {
    if (!isModalVisible) {
      setInputs({
        name: '',
        email: '',
        city: '',
        role: '',
        customRole: '',
        certificate: false,
        permission: false,
        menu: 'traditional',
      })
      setErrors([])
    }
  }, [isModalVisible, setInputs])

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email, name, city, role, customRole, permission} = inputs
    const newErrors = []

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.push('email')
    if (!name.trim() || !/\s/.test(name)) newErrors.push('name')
    if (!city.trim()) newErrors.push('city')
    if (role === '') newErrors.push('role')
    if (role === 'Inne' && !customRole.trim()) newErrors.push('customRole')
    if (!permission) newErrors.push('permission')
    setErrors(newErrors)
    if (newErrors.length === 0) {
      setModalContent(
        <div className={css.successModalContainer}>
          <h2 className={css.successModalHeader}>
            {t('applicationForm.titleModal')}
          </h2>
          <p className={css.successModalParagraph}>
            {t('applicationForm.textModal1')}
          </p>
          <Button
            type="button"
            variant="secondary"
            content={t('applicationForm.buttonModal1')}
            onClick={() => {
              navigate('/landing-page')
              setTimeout(() => scrollToAnchor('program'), 1)
              closeModal(false)
            }}
          />
          <p className={css.successModalParagraph}>
            {t('applicationForm.textModal2')}
          </p>
          <Button
            type="button"
            variant="secondary"
            content={t('applicationForm.buttonModal2')}
            onClick={() => {
              navigate('/')
              setTimeout(() => scrollToAnchor('newsletter'), 1)
              closeModal(false)
            }}
          />
        </div>
      )
      openModal()
    }
  }

  const handleChange = (event, inputType) => {
    const value =
      inputType === 'certificate' || inputType === 'permission'
        ? event.target.checked
        : event.target.value
    setInputs((prevData) => ({
      ...prevData,
      [inputType]: value,
    }))
  }

  const handleClearInput = (inputType) => {
    setInputs((prevData) => ({...prevData, [inputType]: ''}))
    setErrors((prevErrors) => prevErrors.filter((error) => error !== inputType))
  }

  return (
    <div className={css.formWrapper}>
      <h4 className={css.formHeader}>{t('applicationForm.header')}</h4>
      <form className={css.form} onSubmit={handleSubmit}>
        <fieldset className={css.fieldset}>
          <TextComponent
            label="name"
            placeholder="name"
            value={inputs.name}
            type="text"
            errors={errors}
            onChange={(e) => handleChange(e, 'name')}
            onClear={() => handleClearInput('name')}
          />
          <TextComponent
            label="email"
            placeholder="email"
            value={inputs.email}
            type="email"
            errors={errors}
            onChange={(e) => handleChange(e, 'email')}
            onClear={() => handleClearInput('email')}
          />
          <TextComponent
            label="city"
            placeholder="city"
            value={inputs.city}
            type="text"
            errors={errors}
            onChange={(e) => handleChange(e, 'city')}
            onClear={() => handleClearInput('city')}
          />
          <SelectComponent
            value={inputs.role}
            onChange={(e) => handleChange(e, 'role')}
            options={selectOptions}
            error="role"
            errors={errors}
            condition={inputs.role === 'Inne'}
          />
          {inputs.role === 'Inne' && (
            <TextComponent
              label="customRole"
              placeholder="customRolePlaceholder"
              value={inputs.customRole}
              type="text"
              errors={errors}
              onChange={(e) => handleChange(e, 'customRole')}
              onClear={() => handleClearInput('customRole')}
            />
          )}
          <CheckboxComponent
            value={inputs.certificate}
            onChange={(e) => handleChange(e, 'certificate')}
            errors={errors}
            variant="certificate"
          />
          <CheckboxComponent
            value={inputs.permission}
            onChange={(e) => handleChange(e, 'permission')}
            error="permission"
            errors={errors}
            variant="consent"
          />
          <p className={css.formText}>{t('applicationForm.menu')}</p>
          <div className={css.menuWrapper}>
            <RadioComponent
              error="menu"
              value={inputs.menu}
              options={radioOptions}
              onChange={(e) => handleChange(e, 'menu')}
              errors={errors}
            />
          </div>
        </fieldset>
        {errors.length > 0 && (
          <p className={css.errorText}>{t('applicationForm.error')}</p>
        )}
        <Button
          type="submit"
          content={t('applicationForm.button')}
          variant="secondary"
        />
      </form>
    </div>
  )
}

export default ApplicationForm
