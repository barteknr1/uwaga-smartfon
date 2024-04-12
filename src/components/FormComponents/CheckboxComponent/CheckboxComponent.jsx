import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'
import css from './CheckboxComponent.module.css'
import sprite from '../../../assets/svg/sprite.svg'

const CheckboxComponent = ({value, onChange, errors, error, variant, name}) => {
  const {t} = useTranslation()
  return (
    <div className={css.checkboxWrapper}>
      <input
        className={css.formCheckbox}
        id={name}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
      />
      <div className={css.checkmarkBg}>
        <div
          className={`${css.checkmarkBox} ${
            errors.includes(error) && !value && css.checkmarkBoxError
          }`}
        >
          {value && (
            <svg className={css.checkMarkIcon}>
              <use href={sprite + '#checkmark'} />
            </svg>
          )}
        </div>
      </div>
      <label
        className={`${css.formCheckboxText} ${
          errors.includes(error) && !value && css.checkboxTextError
        }`}
        htmlFor={name}
      >
        {t(`checkboxComponent.${variant}`)}
      </label>
    </div>
  )
}

CheckboxComponent.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  variant: PropTypes.string,
  name: PropTypes.string,
}

export default CheckboxComponent
