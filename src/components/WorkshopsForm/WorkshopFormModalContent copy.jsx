import {useState, useEffect, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import Button from '../Button/Button'
import css from './WorkshopsForm.module.css'
import sprite from '../../assets/svg/sprite.svg'

const ModalContent = () => {
  const {t} = useTranslation()
  const {openModal, isModalVisible, setModalContent} = useModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    workshop: '',
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
    console.log(inputType, value, formData)
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

  // Obsługa dropdown select

  const [isActive, setIsActive] = useState(false)
  const selectDropdownRef = useRef(null)

  const handleSelectToggle = () => {
    setIsActive(!isActive)
  }

  const handleOptionSelect = () => {
    setIsActive(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectDropdownRef.current &&
        !selectDropdownRef.current.contains(event.target)
      ) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={
        isModalVisible
          ? `${css.workshopsFormContainer} ${css.workshopsModalIsOpen}`
          : css.workshopsFormContainer
      }
    >
      <h4 className={css.workshopsFormHeader}>Formularz zapisu na warsztaty</h4>
      <form className={css.workshopsForm} onSubmit={handleSubmit}>
        <fieldset className={css.workshopsFormFieldset}>
          <div
            className={`${css.workshopsFormBox} ${
              errors.includes('name') && css.workshopsFormBoxError
            }`}
          >
            <label
              htmlFor="name"
              className={`${css.textbox} ${
                errors.includes('name') && css.textboxError
              }`}
            >
              Imię i nazwisko
            </label>
            <input
              className={css.workshopsFormInput}
              placeholder="Imię i nazwisko"
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange(e, 'name')}
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput('name')}
            >
              {!errors.includes('name') ? (
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
          <div
            className={`${css.workshopsFormBox} ${
              errors.includes('email') && css.workshopsFormBoxError
            }`}
          >
            <label
              htmlFor="email"
              className={`${css.textbox} ${
                errors.includes('email') && css.textboxError
              }`}
            >
              Email
            </label>
            <input
              className={css.workshopsFormInput}
              type="email"
              value={formData.email}
              id="email"
              placeholder="Adres e-mail"
              onChange={(event) => handleChange(event, 'email')}
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput('email')}
            >
              {!errors.includes('email') ? (
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
          <div className={`${css.customSelect} ${isActive ? css.active : ''}`}>
            <label
              className={`${css.textbox} ${
                errors.includes('role') &&
                formData.role === '' &&
                css.textboxError
              }`}
            >
              Rola
            </label>
            <button
              className={`${css.selectButton} ${
                formData.role === '' ? '' : css.selectButtonRole
              } ${formData.role === 'Inne' ? css.selectButtonOther : ''} ${
                errors.includes('role') &&
                formData.role === '' &&
                css.selectButtonError
              }`}
              type="button"
              role="combobox"
              aria-labelledby="select button"
              aria-haspopup="listbox"
              aria-expanded={isActive}
              onClick={handleSelectToggle}
            >
              <div
                className={`${css.selectedValue} ${
                  formData.role === '' ? '' : css.selectedRole
                }`}
              >
                {formData.role === '' ? (
                  'W konferencji uczestniczę jako'
                ) : (
                  <>
                    <span className={css.svgCheckmarkBox}>
                      <svg className={css.svgCheckmark}>
                        <use href={sprite + '#checkmark'} />
                      </svg>
                    </span>
                    <span>{formData.role}</span>
                  </>
                )}
              </div>
              <span
                className={
                  formData.role === '' ? css.svgBox : css.svgBoxInactive
                }
              >
                {!errors.includes('role') ? (
                  <svg className={css.svgChevron}>
                    <use href={sprite + '#chevronForm'} />
                  </svg>
                ) : (
                  <svg className={css.svgTextIcon}>
                    <use href={sprite + '#error-icon'} />
                  </svg>
                )}
              </span>
            </button>
            <ul
              className={css.selectDropdown}
              ref={selectDropdownRef}
              role="listbox"
              id="select-dropdown"
            >
              <li role="option">
                <input
                  type="radio"
                  value="Przedstawiciel organizacji"
                  id="representative"
                  name="representative"
                  checked={formData.role === 'Przedstawiciel organizacji'}
                  onChange={(event) => handleChange(event, 'role')}
                  onClick={() => handleOptionSelect()}
                />
                <label htmlFor="representative">
                  Przedstawiciel organizacji
                  <div className={css.customRadio}>
                    {formData.role === 'Przedstawiciel organizacji' && (
                      <svg className={css.svgTextIcon}>
                        <use href={sprite + '#radio-check'} />
                      </svg>
                    )}
                  </div>
                </label>
              </li>
              <li role="option">
                <input
                  type="radio"
                  value="Nauczyciel"
                  id="teacher"
                  name="teacher"
                  checked={formData.role === 'Nauczyciel'}
                  onChange={(event) => handleChange(event, 'role')}
                  onClick={() => handleOptionSelect()}
                />
                <label htmlFor="teacher">
                  Nauczyciel
                  <div className={css.customRadio}>
                    {formData.role === 'Nauczyciel' && (
                      <svg className={css.svgTextIcon}>
                        <use href={sprite + '#radio-check'} />
                      </svg>
                    )}
                  </div>
                </label>
              </li>
              <li role="option">
                <input
                  type="radio"
                  value="Rodzic"
                  id="parent"
                  name="parent"
                  checked={formData.role === 'Rodzic'}
                  onChange={(event) => handleChange(event, 'role')}
                  onClick={() => handleOptionSelect()}
                />
                <label htmlFor="parent">
                  Rodzic
                  <div className={css.customRadio}>
                    {formData.role === 'Rodzic' && (
                      <svg className={css.svgTextIcon}>
                        <use href={sprite + '#radio-check'} />
                      </svg>
                    )}
                  </div>
                </label>
              </li>
              <li role="option">
                <input
                  type="radio"
                  value="Uczeń"
                  id="student"
                  name="student"
                  checked={formData.role === 'Uczeń'}
                  onChange={(event) => handleChange(event, 'role')}
                  onClick={() => handleOptionSelect()}
                />
                <label htmlFor="student">
                  Uczeń
                  <div className={css.customRadio}>
                    {formData.role === 'Uczeń' && (
                      <svg className={css.svgTextIcon}>
                        <use href={sprite + '#radio-check'} />
                      </svg>
                    )}
                  </div>
                </label>
              </li>
              <li role="option">
                <input
                  type="radio"
                  value="Inne"
                  id="other"
                  name="other"
                  checked={formData.role === 'Inne'}
                  onChange={(event) => handleChange(event, 'role')}
                  onClick={() => handleOptionSelect()}
                />
                <label htmlFor="other">
                  Inne
                  <div className={css.customRadio}>
                    {formData.role === 'Inne' && (
                      <svg className={css.svgTextIcon}>
                        <use href={sprite + '#radio-check'} />
                      </svg>
                    )}
                  </div>
                </label>
              </li>
            </ul>
          </div>
          {formData.role === 'Inne' && (
            <div
              className={`${css.workshopsFormBox} ${css.customRoleInput} ${
                errors.includes('customRole') && css.workshopsFormBoxError
              }`}
            >
              <label
                htmlFor="customRole"
                className={`${css.textbox} ${
                  errors.includes('customRole') && css.textboxError
                }`}
              >
                Rola
              </label>
              <input
                className={css.workshopsFormInput}
                type="text"
                value={formData.customRole}
                id="customRole"
                placeholder="Wpisz swoją rolę"
                onChange={(event) => handleChange(event, 'customRole')}
              />
              <button
                type="button"
                className={css.svgTextButton}
                onClick={() => handleClearInput('customRole')}
              >
                {!errors.includes('customRole') ? (
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
          )}
          <p>
            Każdy uczestnik wydarzenia Uwaga! Smartfon podczas konferencji ma
            możliwość uczestnictwa w jednym wybranym warsztacie. Prosimy o
            zapoznanie się z programem i wybór jednego z poniższych warsztatów.
            Dziękujemy.
          </p>

          <div className={css.radioContainer}>
            <div className={css.radioBox}>
              <input
                className={css.radioInput}
                type="radio"
                value="Warsztat 1"
                id="workshop1"
                checked={formData.workshop === 'Warsztat 1'}
                onChange={(event) => handleChange(event, 'workshop')}
              />
              <div className={css.radioBg}>
                <div
                  className={`${css.customRadio} ${
                    errors.includes('workshop') &&
                    formData.workshop === '' &&
                    css.customRadioError
                  }`}
                >
                  {formData.workshop === 'Warsztat 1' && (
                    <svg className={css.svgTextIcon}>
                      <use href={sprite + '#radio-check'} />
                    </svg>
                  )}
                </div>
              </div>
              <label
                className={`${css.radioLabel} ${
                  errors.includes('workshop') &&
                  formData.workshop === '' &&
                  css.radioLabelError
                }`}
                htmlFor="workshop1"
              >
                Warsztat 1
              </label>
            </div>
            <div className={css.radioBox}>
              <input
                className={css.radioInput}
                type="radio"
                value="Warsztat 2"
                id="workshop2"
                checked={formData.workshop === 'Warsztat 2'}
                onChange={(event) => handleChange(event, 'workshop')}
              />
              <div className={css.radioBg}>
                <div
                  className={`${css.customRadio} ${
                    errors.includes('workshop') &&
                    formData.workshop === '' &&
                    css.customRadioError
                  }`}
                >
                  {formData.workshop === 'Warsztat 2' && (
                    <svg className={css.svgTextIcon}>
                      <use href={sprite + '#radio-check'} />
                    </svg>
                  )}
                </div>
              </div>
              <label
                className={`${css.radioLabel} ${
                  errors.includes('workshop') &&
                  formData.workshop === '' &&
                  css.radioLabelError
                }`}
                htmlFor="workshop2"
              >
                Warsztat 2
              </label>
            </div>
            <div className={css.radioBox}>
              <input
                className={css.radioInput}
                type="radio"
                value="Warsztat 3"
                id="workshop3"
                checked={formData.workshop === 'Warsztat 3'}
                onChange={(event) => handleChange(event, 'workshop')}
              />
              <div className={css.radioBg}>
                <div
                  className={`${css.customRadio} ${
                    errors.includes('workshop') &&
                    formData.workshop === '' &&
                    css.customRadioError
                  }`}
                >
                  {formData.workshop === 'Warsztat 3' && (
                    <svg className={css.svgTextIcon}>
                      <use href={sprite + '#radio-check'} />
                    </svg>
                  )}
                </div>
              </div>
              <label
                className={`${css.radioLabel} ${
                  errors.includes('workshop') &&
                  formData.workshop === '' &&
                  css.radioLabelError
                }`}
                htmlFor="workshop3"
              >
                Warsztat 3
              </label>
            </div>
            <div className={css.radioBox}>
              <input
                className={css.radioInput}
                type="radio"
                value="Warsztat 4"
                id="workshop4"
                checked={formData.workshop === 'Warsztat 4'}
                onChange={(event) => handleChange(event, 'workshop')}
              />
              <div className={css.radioBg}>
                <div
                  className={`${css.customRadio} ${
                    errors.includes('workshop') &&
                    formData.workshop === '' &&
                    css.customRadioError
                  }`}
                >
                  {formData.workshop === 'Warsztat 4' && (
                    <svg className={css.svgTextIcon}>
                      <use href={sprite + '#radio-check'} />
                    </svg>
                  )}
                </div>
              </div>
              <label
                className={`${css.radioLabel} ${
                  errors.includes('workshop') &&
                  formData.workshop === '' &&
                  css.radioLabelError
                }`}
                htmlFor="workshop4"
              >
                Warsztat 4
              </label>
            </div>
          </div>

          <div className={css.checkboxWrapper}>
            <input
              className={css.formCheckbox}
              id="formCheckbox"
              type="checkbox"
              value={formData.isChecked}
              checked={formData.isChecked}
              onChange={(event) => handleChange(event, 'isChecked')}
            />
            <div className={css.checkmarkBg}>
              <div
                className={`${css.checkmarkBox} ${
                  errors.includes('checkbox') &&
                  !formData.isChecked &&
                  css.checkmarkBoxError
                }`}
              >
                {formData.isChecked && (
                  <svg className={css.checkMarkIcon}>
                    <use href={sprite + '#checkmark'} />
                  </svg>
                )}
              </div>
            </div>
            <label
              className={`${css.formCheckboxText} ${
                errors.includes('checkbox') &&
                !formData.isChecked &&
                css.checkboxTextError
              }`}
              htmlFor="formCheckbox"
            >
              Wyrażam zgodę na przetwarzanie moich danych osobowych.
            </label>
          </div>
        </fieldset>
        {errors.length > 0 && (
          <p className={css.errorText}>
            Uzupełnij wszystkie dane i zaznacz zgodę na przetwarzanie danych
            osobowych, aby przesłać formularz.
          </p>
        )}
        <Button
          type="submit"
          content="Zapisuję się"
          variant="secondary"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default ModalContent
