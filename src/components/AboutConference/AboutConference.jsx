import Section from '../Section/Section'
import css from './AboutConference.module.css'
import Button from '../Button/Button'
import {
  about_foto1,
  about_foto2,
  about_foto3,
} from '../../assets/images/AboutConference'
import index from '../../assets/images/AboutConference/index.svg'
const AboutConference = () => {
  return (
    <Section sectionClass={css.AboutConference}>
      <div className={css.AboutConferenceBox}>
        <div className={css.AboutConferenceContainer}>
          <div className={css.AboutConferenceWrapper}>
            <h3 className={css.AboutConferenceTitle}>O konferencji</h3>
            <p className={css.AboutConferenceText}>
              Konferencja „Uwaga! Smartfon” to unikatowe w skali całej Europy
              wydarzenie poświęcone zagadnieniom cyfryzacji i nadmiernemu
              korzystaniu z urządzeń ekranowych przez dzieci i młodzież.
              Spotykamy się w gronie wybitnych specjalistów z dziedziny
              pedagogiki, psychologii i psychiatrii oraz ekspertów i
              popularyzatorów wiedzy o cyfrowych zagrożeniach i cyfrowej
              higienie. Dyskutujemy m.in. o „uzależnieniu od ekranów”,
              cyfryzacji edukacji, kwestii smartfonów w szkołach i roli
              nowoczesnych technologii w życiu społecznym.
            </p>
          </div>
          <img
            className={css.AboutConferenceImg}
            src={about_foto1}
            alt="prelegenci konferencji"
          />
          <svg
            className={`${css.AboutConferenceSvg} ${css.AboutConferenceSvg1}   `}
          >
            <use href={index + '#vector1'} />
          </svg>
        </div>
        <div className={css.AboutConferenceContainer}>
          <div className={css.AboutConferenceWrapper}>
            <h3 className={css.AboutConferenceTitle}>Co chcemy osiągnąć?</h3>
            <p className={css.AboutConferenceText}>
              Celem konferencji jest ukazanie zagrożeń związanych z nadużywaniem
              smartfonów przez dzieci i młodzież szkolną oraz zaproponowanie
              alternatywnych form spędzania przez nich wolnego czasu. W ramach
              „Uwaga! Smartfon” odbywają się wykłady, warsztaty, panele
              dyskusyjne i integracja międzysektorowa.
            </p>
          </div>

          <img
            className={css.AboutConferenceImg}
            src={about_foto2}
            alt="widownia"
          />
          <svg
            className={`${css.AboutConferenceSvg} ${css.AboutConferenceSvg2}   `}
          >
            <use href={index + '#vector3'} />
          </svg>
        </div>
        <div className={css.AboutConferenceContainer}>
          <div className={css.AboutConferenceWrapper}>
            <h3 className={css.AboutConferenceTitle}>
              Kogo chcemy zaangażować?
            </h3>
            <p className={css.AboutConferenceText}>
              „Uwaga! Smartfon” jest przestrzenią spotkania dla ekspertów,
              naukowców, specjalistów i praktyków z różnych obszarów i dziedzin
              funkcjonujących wokół cyfryzacji. Rdzeniem tematycznym jest
              przeciwdziałanie uzależnieniom i negatywne następstwa nadużywania
              smartfonów. Udział w konferencji był i zawsze pozostanie
              bezpłatny, a jej głównymi odbiorcami są nauczyciele, rodzice,
              specjaliści i aktywiści.
            </p>
          </div>

          <img
            className={css.AboutConferenceImg}
            src={about_foto3}
            alt="widownia"
          />
          <svg
            className={`${css.AboutConferenceSvg} ${css.AboutConferenceSvg3}   `}
          >
            <use href={index + '#vector2'} />
          </svg>
        </div>
        <Button variant="secondary" content="Więcej" />
      </div>
    </Section>
  )
}
export default AboutConference
