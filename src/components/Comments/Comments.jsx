import Section from '../Section/Section'
import css from './Comments.module.css'

const Comments = () => {
  return (
    <Section
      sectionClass={css.comments}
      titleClass={css.commentsTitle}
      title="Opinie uczestników"
    >
      <div className={css.commentsContainer}>
        <div className={css.commentsBox}>
          <p className={css.commentsText}>
            “To było niezwykłe doświadczenie słuchania na żywo ekspertów, którzy
            poruszali sprawy, mające wpływ na wychowanie dzieci. Dla mnie jako
            rodzica było to niezwykle ubogacające. Cieszę się, że konferencji
            mogłem słuchać razem z moją żoną.”
          </p>
        </div>
        <div className={css.commentsBox}>
          <p className={css.commentsText}>
            “Bardzo serdecznie wam dziękuję, bo byłam przerażona tym tematem, a
            teraz mam konkretną wiedzę i umiem odróżnić przynajmniej w
            podstawowym zakresie nawyk od uzależnienia. I wiem, co robić, w
            końcu wiem, co robić!”
          </p>
        </div>
      </div>
    </Section>
  )
}
export default Comments
