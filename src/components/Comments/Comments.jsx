import Section from '../Section/Section'
import PropTypes from 'prop-types'
import css from './Comments.module.css'
import sprite from '../../assets/svg/sprite.svg'

const Comments = ({isLandingPage}) => {
  const sectionClass = isLandingPage ? css.commentsLandingPage : css.comments

  const titleClass = isLandingPage
    ? css.commentsTitleLandingPage
    : css.commentsTitle

  const boxClass = isLandingPage ? css.commentsBoxLandingPage : css.commentsBox

  const textClass = isLandingPage
    ? css.commentsTextLandingPage
    : css.commentsText

  const leftSvgClass = isLandingPage ? css.leftSvgLandingPage : css.leftSvg
  const rightSvgClass = isLandingPage ? css.rightSvgLandingPage : css.rightSvg

  return (
    <Section
      sectionClass={sectionClass}
      titleClass={titleClass}
      title="Opinie uczestników"
    >
      <div className={css.commentsContainer}>
        <svg className={leftSvgClass}>
          <use href={sprite + '#paragraph-icon'} />
        </svg>
        <svg className={rightSvgClass}>
          <use href={sprite + '#paragraph-icon'} />
        </svg>
        <div className={boxClass}>
          <blockquote className={textClass}>
            “To było niezwykłe doświadczenie słuchania na żywo ekspertów, którzy
            poruszali sprawy, mające wpływ na wychowanie dzieci. Dla mnie jako
            rodzica było to niezwykle ubogacające. Cieszę się, że konferencji
            mogłem słuchać razem z moją żoną.”
          </blockquote>
        </div>
        <div className={boxClass}>
          <blockquote className={textClass}>
            “Bardzo serdecznie wam dziękuję, bo byłam przerażona tym tematem, a
            teraz mam konkretną wiedzę i umiem odróżnić przynajmniej w
            podstawowym zakresie nawyk od uzależnienia. I wiem, co robić, w
            końcu wiem, co robić!”
          </blockquote>
        </div>
      </div>
    </Section>
  )
}

Comments.propTypes = {
  isLandingPage: PropTypes.bool.isRequired,
}

export default Comments
