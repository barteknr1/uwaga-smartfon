import css from './ApplicationForm.module.css'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'
import {useState, useEffect} from 'react'
import {useModal} from '../Modal/ModalProvider'
import {useTranslation} from 'react-i18next'

const ApplicationForm = () => {
  const {t} = useTranslation()

  const {setIsModalVisible, setModalContent} = useModal()

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    city: '',
    role: '',
    certificate: false,
    permission: false,
    menu: 'traditional',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.elements.email.value.trim()
    const name = form.elements.name.value.trim()
    const city = form.elements.city.value.trim()
    const role = form.role.value
    const certificate = form.elements.certificate.checked
    const permission = form.elements.permission.checked
    const menu = form.elements.menu.value
    // console.log(`name: ` + name);
    // console.log(`email: ` + email);
    // console.log(`city: ` + city);
    // console.log(`role: ` + role);
    // console.log(`certificate: ` + certificate);
    // console.log(`permission: ` + permission);
    // console.log(`menu: ` + menu);
  }

  const handleChange = (e) => {
    e.persist()
    const {name, value, type, checked} = e.currentTarget
    const inputValue = type === 'checkbox' ? checked : value
    const isRadio = type === 'radio'
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: isRadio ? value : inputValue,
    }))
  }

  const handleClearInput = (e) => {
    console.log(e.currentTarget)
    // if (inputType === 'name') {
    //   setNameInput('')
    // }
    // if (inputType === 'email') {
    //   setEmailInput('')
    // }
    // if (inputType === 'position') {
    //   setPositionInput('')
    // }
    // if (inputType === 'area') {
    //   setAreaInput('')
    // }
  }
  // useEffect(() => {
  //   console.log(inputs);
  // }, [inputs])

  const openModal = () => {
    setIsModalVisible(true)
    setModalContent(modalContent)
  }

  const modalContent = (
    <div>
      <h4 className={css.formHeader}>Formularz zgłoszeniowy</h4>
      <form className={css.form} onSubmit={handleSubmit}>
        <fieldset className={css.fieldset}>
          <div className={css.inputWrapper}>
            <label htmlFor="name" className={css.label}>
              Imię i nazwisko
            </label>
            <input
              className={`${css.input} ${css.formText}`}
              type="text"
              name="name"
              id="name"
              placeholder="Imię i nazwisko"
              onChange={handleChange}
              autoComplete="true"
              required
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={handleClearInput}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="email" className={css.label}>
              Adres e-mail
            </label>
            <input
              className={`${css.input} ${css.formText}`}
              type="email"
              name="email"
              id="email"
              placeholder="Adres e-mail"
              onChange={handleChange}
              autoComplete="true"
              required
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput()}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="city" className={css.label}>
              Miejscowość
            </label>
            <input
              className={`${css.input} ${css.formText}`}
              type="text"
              name="city"
              id="city"
              placeholder="Miejscowość"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput()}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="role" className={css.label}>
              Rola
            </label>
            <select
              className={`${css.input} ${css.formText}`}
              name="role"
              id="role"
              onChange={handleChange}
              required
            >
              <option value="" hidden>
                W konferencji uczestniczę jako
              </option>
              <option value="representative">Przedstawiciel organizacji</option>
              <option value="teacher">Nauczyciel</option>
              <option value="parent">Rodzic</option>
              <option value="student">Uczeń</option>
              <option value="other">Inne</option>
            </select>
          </div>
        </fieldset>
        <div className={css.bottomArea}>
          <label className={`${css.checkbox} ${css.formText}`}>
            <input type="checkbox" name="certificate" onChange={handleChange} />
            Chcę otrzymać certyfikat uczestnictwa w konferencji Uwaga! Smartfon.
          </label>
          <label className={`${css.checkbox} ${css.formText}`}>
            <input
              type="checkbox"
              name="permission"
              onChange={handleChange}
              required
            />
            Wyrażam zgodę na przetwarzanie moich danych osobowych.
          </label>
          <p className={css.formText}>
            Podczas konferencji będzie zagwarantowany ciepły posiłek. Prosimy o
            wybór menu zgodnie z preferencjami. Dziękujemy.
          </p>
          <div className={css.menuWrapper}>
            <label className={`${css.radio} ${css.formText}`}>
              <input
                type="radio"
                name="menu"
                value="traditional"
                onChange={handleChange}
              />
              Menu tradycyjne
            </label>
            <label className={`${css.radio} ${css.formText}`}>
              <input
                type="radio"
                name="menu"
                value="vegetarian"
                onChange={handleChange}
              />
              Menu wegetariańskie
            </label>
          </div>
        </div>
        <Button
          type="submit"
          content="Wyślij formularz zgłoszeniowy"
          variant="secondary"
        />
      </form>
    </div>
  )

  return (
    <>
      <Button
        type="button"
        variant="primary"
        content={t('banner.button')}
        onClick={() => openModal()}
      />
    </>
  )
}

export default ApplicationForm
