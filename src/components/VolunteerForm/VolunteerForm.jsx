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

  const handleClearInput = (inputType) => {
    switch (inputType) {
      case 'name':
        setNameInput('')
        break
      case 'email':
        setEmailInput('')
        break
      case 'position':
        setPositionInput('')
        break
      case 'area':
        setAreaInput('')
        break
      default:
        break
    }
  }

  return (
    <Section
      sectionClass={css.volunteerForm}
      titleClass={css.volunteerFormTitle}
      title="Wypełnij formularz i zostań częścią zespołu wolontariuszy!"
    >
      <div className={css.ellipse}></div>
      <div className={css.volunteerFormContainer}>
        <div className={css.volunteerFormInputContainer}>
          <div className={css.volunteerFormBox}>
            <label className={css.textbox} htmlFor="name">
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
              className={css.svgTextButton}
              onClick={() => handleClearInput('name')}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.volunteerFormBox}>
            <label className={css.textbox} htmlFor="email">
              Adres e-mail
            </label>
            <input
              placeholder="Adres e-mail"
              className={css.volunteerFormInput}
              id="email"
              type="text"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
            <button
              className={css.svgTextButton}
              onClick={() => handleClearInput('email')}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.volunteerFormBox}>
            <label className={css.textbox} htmlFor="position">
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
              className={css.svgTextButton}
              onClick={() => handleClearInput('position')}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
          <div className={css.volunteerFormBox}>
            <label className={css.textbox} htmlFor="area">
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
              className={css.svgTextButton}
              onClick={() => handleClearInput('area')}
            >
              <svg className={css.svgTextIcon}>
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.checkboxBox}>
          <input className={css.checkbox} id="checkbox" type="checkbox" />
          <div className={css.checkMarkBox}>
            <span className={css.checkMark}></span>
          </div>
          <label className={css.checkboxText} htmlFor="checkbox">
            Wyrażam zgodę na przetwarzanie moich danych osobowych.
          </label>
        </div>
        <Button variant="primary" content="Wyślij formularz" />
      </div>
      <div className={css.ellipse2}></div>
    </Section>
  )
}

export default VolunteerForm
