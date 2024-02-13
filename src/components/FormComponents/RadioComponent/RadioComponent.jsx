import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'
import css from './RadioComponent.module.css'
import sprite from '../../../assets/svg/sprite.svg'

const RadioComponent = ({error, value, onChange, options, errors}) => {
  const {t} = useTranslation()

  return (
    <div className={css.radioContainer}>
      {options.map((option, index) => (
        <div className={css.radioBox} key={index}>
          <input
            className={css.radioInput}
            type="radio"
            value={option}
            id={option}
            checked={value === option}
            onChange={onChange}
          />
          <div className={css.radioBg}>
            <div
              className={`${css.customRadio} ${
                errors.includes(error) && value === '' && css.customRadioError
              }`}
            >
              {value === option && (
                <svg className={css.svgTextIcon}>
                  <use href={sprite + '#radio-check'} />
                </svg>
              )}
            </div>
          </div>
          <label
            className={`${css.radioLabel} ${
              errors.includes(error) && value === '' && css.radioLabelError
            }`}
            htmlFor={option}
          >
            {t(`radio.${option}`)}
          </label>
        </div>
      ))}
    </div>
  )
}

RadioComponent.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  errors: PropTypes.arrayOf(PropTypes.string),
}

export default RadioComponent
