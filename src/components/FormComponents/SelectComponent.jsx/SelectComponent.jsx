import {useEffect, useRef, useState} from 'react'
import css from './SelectComponent.module.css'
import sprite from '../../../assets/svg/sprite.svg'
import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'
const SelectComponent = ({
  value,
  onChange,
  options,
  error,
  errors,
  condition,
  name,
}) => {
  const {t} = useTranslation()
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
    <div className={`${css.customSelect} ${isActive ? css.active : ''}`}>
      <label
        className={`${css.textbox} ${
          errors.includes(error) && value === '' && css.textboxError
        }`}
      >
        {t('selectComponent.label')}
      </label>
      <button
        className={`${css.selectButton} ${
          value === '' ? '' : css.selectButtonRole
        } ${condition ? css.selectButtonOther : ''} ${
          errors.includes(error) && value === '' && css.selectButtonError
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
            value === '' ? '' : css.selectedRole
          }`}
        >
          {value === '' ? (
            t('selectComponent.placeholder')
          ) : (
            <>
              <span className={css.svgCheckmarkBox}>
                <svg className={css.svgCheckmark}>
                  <use href={sprite + '#checkmark'} />
                </svg>
              </span>
              <span>{t(`selectComponent.${value}`)}</span>
            </>
          )}
        </div>
        <span className={value === '' ? css.svgBox : css.svgBoxInactive}>
          {!errors.includes(error) ? (
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
        {options.map((option, index) => (
          <li key={index} role="option">
            <input
              type="radio"
              value={option}
              id={option}
              name={name}
              checked={value === option}
              onChange={onChange}
              onClick={() => handleOptionSelect()}
            />
            <label htmlFor={option}>
              {t(`selectComponent.${option}`)}
              <div className={css.customRadio}>
                {value === option && (
                  <svg className={css.svgTextIcon}>
                    <use href={sprite + '#radio-check'} />
                  </svg>
                )}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

SelectComponent.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  condition: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default SelectComponent
