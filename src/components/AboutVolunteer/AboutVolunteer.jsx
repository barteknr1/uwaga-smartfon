import Section from '../Section/Section'
import css from './AboutVolunteer.module.css'
import {
  about_foto1,
  about_foto2,
  about_foto3,
} from '../../assets/images/AboutVolunteer'
import sprite from '../../assets/svg/sprite.svg'

const AboutVolunteer = () => {
  return (
    <Section sectionClass={css.aboutVolunteer}>
      <div className={css.ellipse}></div>
      <div className={css.aboutVolunteerBox}>
        <div className={css.aboutVolunteerContainer}>
          <div className={css.aboutVolunteerWrapper}>
            <h3 className={css.aboutVolunteerTitle}>Jeśli:</h3>
            <ul className={css.aboutVolunteerList}>
              <li className={css.aboutVolunteerItem}>
                chcesz{' '}
                <span className={css.bold}>
                  być częścią inspirującej inicjatywy
                </span>{' '}
                , która przyczynia się do edukacji i świadomości w ważnej
                kwestii uzależnienia dzieci i młodzieży od ekranów,
              </li>
              <li className={css.aboutVolunteerItem}>
                chcesz{' '}
                <span className={css.bold}>
                  pomóc w dotarciu do szerokiego grona odbiorców
                </span>
                wydarzenia,
              </li>
              <li className={css.aboutVolunteerItem}>
                chcesz{' '}
                <span className={css.bold}>
                  wesprzeć swoją aktywnością organizację konferencji
                </span>
                “Uwaga! Smartfon”.
              </li>
            </ul>
            <p className={css.aboutVolunteerText}>
              Jeśli TAK, to poszukujemy właśnie CIEBIE!
            </p>
          </div>
          <div className={css.aboutVolunteerImgBox}>
            <img
              className={css.aboutVolunteerImg}
              src={about_foto1}
              alt="wolontariuszka"
            />
            <svg
              className={`${css.aboutVolunteerSvg} ${css.aboutVolunteerSvg1}   `}
            >
              <use href={sprite + '#aboutPurple'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutVolunteerContainer}>
          <div className={css.aboutVolunteerWrapper}>
            <h3 className={css.aboutVolunteerTitle}>
              Aby zostać wolontariuszem
            </h3>
            <ul className={css.aboutVolunteerList}>
              <li className={css.aboutVolunteerItem}>
                <span className={css.bold}>
                  Przeczytaj dostępne informacje na temat konferencji
                </span>{' '}
                i celów, które chcemy osiągnąć.
              </li>
              <li className={css.aboutVolunteerItem}>
                Zorientuj się, jakie zadania będą wymagały wsparcia
                wolontariuszy i{' '}
                <span className={css.bold}>
                  wybierz interesujący Cię obszar działania
                </span>
                .
              </li>
              <li className={css.aboutVolunteerItem}>
                <span className={css.bold}>
                  Wypełnij formularz zgłoszeniowy
                </span>{' '}
                lub skontaktuj się z nami mailowo.
              </li>
            </ul>
            <p className={css.aboutVolunteerText}>Zapraszamy serdecznie!</p>
          </div>
          <div className={css.aboutVolunteerImgBox}>
            <img
              className={css.aboutVolunteerImg}
              src={about_foto2}
              alt="wolontariuszki Uwaga Smartfon"
            />
            <svg
              className={`${css.aboutVolunteerSvg} ${css.aboutVolunteerSvg2}   `}
            >
              <use href={sprite + '#aboutViolet'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutVolunteerContainer}>
          <div className={css.aboutVolunteerWrapper}>
            <h3 className={css.aboutVolunteerTitle}>
              Dlaczego warto do nas dołączyć?
            </h3>
            <ul className={css.aboutVolunteerList}>
              <li className={css.aboutVolunteerItem}>
                Poznasz ciekawych i inspirujących ludzi, z którymi{' '}
                <span className={css.bold}>zbudujesz wartościowe relacje</span>.
              </li>
              <li className={css.aboutVolunteerItem}>
                <span className={css.bold}>Zyskasz doświadczenie</span> przy
                organizacji konferencji o ważnym społecznym znaczeniu.
              </li>
              <li className={css.aboutVolunteerItem}>
                Dołączając do wolontariatu,{' '}
                <span className={css.bold}>
                  zdobędziesz praktyczne umiejętności pracy zespołowej
                </span>
                , a także cenne doświadczenie zawodowe.
              </li>
              <li className={css.aboutVolunteerItem}>
                Jako wolontariusz{' '}
                <span className={css.bold}>
                  masz szansę osobiście poznać ekspertów
                </span>
                , psychologów oraz profesorów, a także{' '}
                <span className={css.bold}>zdobyć wiedzę</span>, która może być
                wartościowa zarówno dla Ciebie, jak i dla Twojej społeczności.
              </li>
            </ul>
            <p className={css.aboutVolunteerText}>
              Zostań ambasadorem wydarzenia “Uwaga! Smartfon”, podziel się
              swoimi umiejętnościami i wiedzą, aby wesprzeć ważny cel, a tym
              samym zainwestuj w swój rozwój osobisty.{' '}
              <span className={css.bold}>
                Twoje zaangażowanie może pomóc w edukacji oraz wsparciu dzieci i
                młodzieży
              </span>
              .
            </p>
          </div>
          <div className={css.aboutVolunteerImgBox}>
            <img
              className={css.aboutVolunteerImg}
              src={about_foto3}
              alt="wolontariuszki"
            />
            <svg
              className={`${css.aboutVolunteerSvg} ${css.aboutVolunteerSvg3}   `}
            >
              <use href={sprite + '#aboutPink'} />
            </svg>
          </div>
        </div>
      </div>
      <div className={css.ellipse2}></div>
    </Section>
  )
}
export default AboutVolunteer
