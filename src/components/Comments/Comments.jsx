import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'

import Section from '../Section/Section'

import css from './Comments.module.css'

import sprite from '../../assets/svg/sprite.svg'

const Comments = ({isLandingPage}) => {
  const {t} = useTranslation()

  const sectionClass = isLandingPage
    ? `${css.comments} ${css.commentsLandingPage}`
    : css.comments

  const titleClass = isLandingPage
    ? `${css.commentsTitle} ${css.commentsTitleLandingPage}`
    : css.commentsTitle

  const boxClass = isLandingPage
    ? `${css.commentsBox} ${css.commentsBoxLandingPage}`
    : css.commentsBox

  const textClass = isLandingPage
    ? `${css.commentsText} ${css.commentsTextLandingPage}`
    : css.commentsText

  const leftSvgClass = isLandingPage
    ? `${css.leftSvg} ${css.leftSvgLandingPage}`
    : css.leftSvg
  const rightSvgClass = isLandingPage
    ? `${css.rightSvg} ${css.rightSvgLandingPage}`
    : css.rightSvg

  return (
    <Section
      sectionClass={sectionClass}
      titleClass={titleClass}
      title={t('comments.title')}
    >
      <div className={css.commentsContainer}>
        <svg className={leftSvgClass}>
          <use href={sprite + '#paragraph-icon'} />
        </svg>
        <svg className={rightSvgClass}>
          <use href={sprite + '#paragraph-icon'} />
        </svg>
        <div className={boxClass}>
          <blockquote className={textClass}>{t('comments.quote1')}</blockquote>
        </div>
        <div className={boxClass}>
          <blockquote className={textClass}>{t('comments.quote2')}</blockquote>
        </div>
      </div>
    </Section>
  )
}

Comments.propTypes = {
  isLandingPage: PropTypes.bool.isRequired,
}

export default Comments
