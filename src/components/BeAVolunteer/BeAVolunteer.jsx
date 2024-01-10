import Section from '../Section/Section'
import css from './BeAVolunteer.module.css'
import Button from '../Button/Button'
import sprite from '../../assets/svg/sprite.svg'

const BeAVolunteer = () => {
  return (
    <Section
      sectionClass={css.BeAVolunteer}
      titleClass={css.BeAVolunteerTitle}
      title="Zostań wolonatriuszem Fundacji Projekt PL"
    >
      <div className={css.BeAVolunteerContainer}>
        <div className={css.BeAVolunteerContainerBox}>
          <svg className={css.BeAVolunteerSvg}>
            <use href={sprite + '#group'} />
          </svg>
          <div className={css.BeAVolunteerTextContainer}>
            <p className={css.BeAVolunteerText}>
              Jeśli chcesz być częścią inspirującej inicjatywy, która przyczynia
              się do edukacji i świadomości w ważnej kwestii uzależnienia dzieci
              i młodzieży od ekranów, chcesz pomóc w dotarciu do szerokiego
              grona odbiorców wydarzenia, chcesz wesprzeć swoją aktywnością
              organizację konferencji “Uwaga! Smartfon”,
            </p>
            <p className={css.BeAVolunteerText}>
              Jeśli TAK, to zostań Wolontariuszem i dołącz do Naszego zespołu!
              Zdobędziesz cenne doświadczenie, poznasz inspirujących ludzi i
              zainwestujesz w swój rozwój osobisty.{' '}
            </p>
            <p className={css.BeAVolunteerText}>
              Wypełnij formularz zgłoszeniowy i razem z Nami zorganizuj
              niezapomniane wydarzenie “Uwaga! Smartfon”.
            </p>
          </div>{' '}
        </div>
        <Button variant="secondary" content="Zostań Wolontariuszem"></Button>
      </div>{' '}
    </Section>
  )
}
export default BeAVolunteer
