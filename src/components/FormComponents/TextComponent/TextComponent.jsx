import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'
import css from './TextComponent.module.css'
import sprite from '../../../assets/svg/sprite.svg'

const TextComponent = ({
  label,
  placeholder,
  value,
  type,
  onChange,
  onClear,
  errors,
  name,
}) => {
  const {t} = useTranslation()

  return (
    <div
      className={`${css.FormBox} ${errors.includes(label) && css.FormBoxError}`}
    >
      <label
        htmlFor={label}
        className={`${css.textbox} ${
          errors.includes(label) && css.textboxError
        }`}
      >
        {t(`textComponent.${label}`)}
      </label>
      <input
        className={css.FormInput}
        placeholder={t(`textComponent.${placeholder}`)}
        id={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <button type="button" className={css.svgTextButton} onClick={onClear}>
        {!errors.includes(label) ? (
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
  )
}

TextComponent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  onClear: PropTypes.func,
  onChange: PropTypes.func,
}

export default TextComponent
