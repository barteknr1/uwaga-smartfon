import {useTranslation} from 'react-i18next'
import {useModal} from '../Modal/ModalProvider'
import css from './Support.module.css'
import Button from '../Button/Button'
import {scrollToAnchor} from '../Scroll'

const SupportContent = () => {
  const {t} = useTranslation()
  const {setIsModalVisible, setModalContent} = useModal()

  const onInput = (e) => {
    console.log(e.target.value)
  }

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
      <div className={css.supportContainer}>
        <h4 className={css.supportHeader}>{t('support.title')}</h4>
        <p className={css.supportText}>{t('support.text1')}</p>
        <p className={css.supportText}>{t('support.text2')}</p>
        <div className={css.supportButtons}>
          <button className={css.supportButton} type="button">
            35 zł
          </button>
          <button className={css.supportButton} type="button">
            45 zł
          </button>
          <button className={css.supportButton} type="button">
            100 zł
          </button>
          <input
            className={css.supportInput}
            type="number"
            placeholder="___zł"
            onChange={onInput}
            min="5"
          />
        </div>
        <Button
          type="submit"
          content={t('support.button')}
          variant="primary"
          onClick={(e) => {
            handleSubmit()
            e.target.blur()
          }}
        />
      </div>
    </>
  )
}

export default SupportContent
