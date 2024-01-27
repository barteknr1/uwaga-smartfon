import {useState} from 'react'
import Section from '../Section/Section'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'
import css from './VolunteerForm.module.css'

const VolunteerForm = () => {
  const [nameInput, setNameInput] = useState('')
  const [isNameValid, setIsNameValid] = useState(true)
  const [emailInput, setEmailInput] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [positionInput, setPositionInput] = useState('')
  const [isPositionValid, setIsPositionValid] = useState(true)
  const [areaInput, setAreaInput] = useState('')
  const [isAreaValid, setIsAreaValid] = useState(true)
  const [isChecked, setIsChecked] = useState(false)
  const [error, setError] = useState(false)

  const handleClearInput = (inputType) => {
    setError(false)
    setIsNameValid(true)
    setIsEmailValid(true)
    setIsPositionValid(true)
    setIsAreaValid(true)
    if (inputType === 'name') {
      setNameInput('')
    }
    if (inputType === 'email') {
      setEmailInput('')
    }
    if (inputType === 'position') {
      setPositionInput('')
    }
    if (inputType === 'area') {
      setAreaInput('')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailContain = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailContain.test(emailInput)) {
      setIsEmailValid(true)
      setError(false)
    } else {
      setIsEmailValid(false)
      setError(true)
    }

    if (!nameInput.trim() || !/\s/.test(nameInput)) {
      setIsNameValid(false)
      setError(true)
    } else {
      setIsNameValid(true)
    }

    if (!areaInput.trim()) {
      setIsAreaValid(false)
      setError(true)
    } else {
      setIsAreaValid(true)
    }

    if (!positionInput.trim()) {
      setIsPositionValid(false)
      setError(true)
    } else {
      setIsPositionValid(true)
    }

    if (!isChecked) {
      setError(true)
    }
  }

  return (
    <Section
      sectionClass={css.volunteerForm}
      titleClass={css.volunteerFormTitle}
      title="Wypełnij formularz i zostań częścią zespołu wolontariuszy!"
    >
      <div className={css.ellipse}></div>
      <form className={css.volunteerFormContainer} onSubmit={handleSubmit}>
        <fieldset className={css.volunteerFormInputContainer}>
          <div
            className={`${css.volunteerFormBox} ${
              !isNameValid && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${!isNameValid && css.textboxError}`}
              htmlFor="name"
            >
              Imię i nazwisko
            </label>
            <input
              placeholder="Imię i nazwisko"
              className={css.volunteerFormInput}
              id="name"
              type="text"
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput('name')}
            >
              {isNameValid ? (
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
            className={`${css.volunteerFormBox} ${
              !isEmailValid && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${!isEmailValid && css.textboxError}`}
              htmlFor="email"
            >
              Adres e-mail
            </label>
            <input
              placeholder="Adres e-mail"
              className={css.volunteerFormInput}
              id="email"
              type="email"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput('email')}
            >
              {isEmailValid ? (
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
            className={`${css.volunteerFormBox} ${
              !isPositionValid && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${
                !isPositionValid && css.textboxError
              }`}
              htmlFor="position"
            >
              Stanowisko
            </label>
            <input
              placeholder="Stanowisko"
              className={css.volunteerFormInput}
              id="position"
              type="text"
              value={positionInput}
              onChange={(event) => setPositionInput(event.target.value)}
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput('position')}
            >
              {isPositionValid ? (
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
            className={`${css.volunteerFormBox} ${
              !isAreaValid && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${!isNameValid && css.textboxError}`}
              htmlFor="area"
            >
              Obszar działania, który chcesz wesprzeć
            </label>
            <input
              placeholder="Obszar działania, który chcesz wesprzeć"
              className={css.volunteerFormInput}
              id="area"
              type="text"
              value={areaInput}
              onChange={(event) => setAreaInput(event.target.value)}
            />
            <button
              type="button"
              className={css.svgTextButton}
              onClick={() => handleClearInput('area')}
            >
              {isAreaValid ? (
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
        </fieldset>
        <div className={css.checkboxBox}>
          <input
            className={css.checkbox}
            id="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className={css.checkMarkBox}>
            <span
              className={`${css.checkMark} ${error && css.checkMarkError}`}
            ></span>
          </div>
          <label
            className={`${css.checkboxText} ${
              error && !isChecked && css.checkboxTextError
            }`}
            htmlFor="checkbox"
          >
            Wyrażam zgodę na przetwarzanie moich danych osobowych.
          </label>
        </div>
        {error && (
          <p className={css.errorText}>
            Uzupełnij wszystkie dane i zaznacz zgodę na przetwarzanie danych
            osobowych, aby przesłać formularz.
          </p>
        )}
        <Button variant="primary" content="Wyślij formularz" type="submit" />
      </form>
      <div className={css.ellipse2}></div>
    </Section>
  )
}

export default VolunteerForm
