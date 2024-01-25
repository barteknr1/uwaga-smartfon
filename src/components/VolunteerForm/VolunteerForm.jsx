import {useState} from 'react'
import Section from '../Section/Section'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'
import css from './VolunteerForm.module.css'

const VolunteerForm = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [positionInput, setPositionInput] = useState('')
  const [areaInput, setAreaInput] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [error, setError] = useState(false)

  const handleClearInput = (inputType) => {
    setError(false)

    if (inputType === 'name') setNameInput('')
    if (inputType === 'email') setEmailInput('')
    if (inputType === 'position') setPositionInput('')
    if (inputType === 'area') setAreaInput('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailContain = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailContain.test(emailInput)) {
      console.log('Email:', emailInput, 'Consent:', isChecked, 'Err:', error)
      setError(false)
    } else {
      console.log('Email:', emailInput, 'Consent:', isChecked, 'Err:', error)
      setError(true)
      console.error('Please enter a valid e-mail address')
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
              error && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${error && css.textboxError}`}
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
              {!error ? (
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
              error && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${error && css.textboxError}`}
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
              {!error ? (
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
              error && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${error && css.textboxError}`}
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
              {!error ? (
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
              error && css.volunteerFormBoxError
            }`}
          >
            <label
              className={`${css.textbox} ${error && css.textboxError}`}
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
              {!error ? (
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
          <label className={css.checkboxText} htmlFor="checkbox">
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
