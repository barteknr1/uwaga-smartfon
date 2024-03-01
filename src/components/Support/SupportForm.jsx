import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import css from './Support.module.css'
import Button from '../Button/Button'
import {scrollToAnchor} from '../Scroll'
import {useState, useEffect} from 'react'

const SupportContent = () => {
  const {t} = useTranslation()
  const {setIsModalVisible, setModalContent} = useModal()
  const [amount, setAmount] = useState('')
  const [isOther, setIsOther] = useState(false)

  const onChange = (e) => {
    if (e.target.value === 'other') {
      setIsOther(true)
      setAmount('0')
    }
    if (e.target.value !== 'other') {
      setIsOther(false)
      setAmount(e.target.value)
    }
  }

  useEffect(() => {
    console.log(amount)
    console.log(isOther)
  }, [amount, isOther])

  const handleSubmit = () => {
    setModalContent(
      <div className={css.supportModalContainer}>
        <h2 className={css.supportModalHeader}>{t('support.titleModal')}</h2>
        <p className={css.supportModalParagraph}>{t('support.textModal1')}</p>
        <Button
          type="button"
          variant="secondary"
          content={t('support.buttonModal1')}
          onClick={() => {
            scrollToAnchor('be_a_volunteer')
            setIsModalVisible(false)
          }}
        ></Button>
        <p className={css.supportModalParagraph}>{t('support.textModal2')}</p>
        <Button
          type="button"
          variant="secondary"
          content={t('support.buttonModal2')}
          onClick={() => {
            scrollToAnchor('newsletter')
            setIsModalVisible(false)
          }}
        />
      </div>
    )
  }

  return (
    <>
      <div>
        <h4 className={css.supportHeader}>{t('support.title')}</h4>
        <p className={css.supportText}>{t('support.text1')}</p>
        <p className={css.supportText}>{t('support.text2')}</p>
        <form className={css.supportForm}>
          <fieldset className={css.supportFieldset}>
            <input
              className={css.supportInput}
              type="radio"
              name="value"
              id="35"
              value="35"
              onChange={onChange}
            />
            <label className={css.supportLabel} htmlFor="35">
              35zł
            </label>
            <input
              className={css.supportInput}
              type="radio"
              name="value"
              id="45"
              value="45"
              onChange={onChange}
            />
            <label className={css.supportLabel} htmlFor="45">
              45zł
            </label>
            <input
              className={css.supportInput}
              type="radio"
              name="value"
              id="100"
              value="100"
              onChange={onChange}
            />
            <label className={css.supportLabel} htmlFor="100">
              100zł
            </label>
            <input
              className={css.supportInput}
              type="radio"
              name="value"
              id="other"
              value="other"
              onChange={onChange}
            />
            <label className={css.supportLabel} htmlFor="other">
              Inna
            </label>
            {isOther && (
              <>
                <input type="number" name="value" id="custom" min="10" />
              </>
            )}
          </fieldset>
          <Button
            type="submit"
            content={t('support.button')}
            variant="primary"
            onClick={(e) => {
              handleSubmit()
              e.target.blur()
            }}
          />
        </form>
      </div>
    </>
  )
}

export default SupportContent
