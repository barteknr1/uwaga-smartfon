import Section from '../Section/Section'
import Button from '../Button/Button'
import css from './AboutConference.module.css'
import {
  about_foto1,
  about_foto2,
  about_foto3,
} from '../../assets/images/AboutConference'
import sprite from '../../assets/svg/sprite.svg'

const AboutConference = () => {
  return (
    <Section sectionClass={css.aboutConference}>
      <div className={css.aboutConferenceBox}>
        <div className={css.aboutConferenceContainer}>
          <div className={css.aboutConferenceWrapper}>
            <h3 className={css.aboutConferenceTitle}>O konferencji</h3>
            <p className={css.aboutConferenceText}>
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
          <div className={css.aboutConferenceImgBox}>
            <img
              className={css.aboutConferenceImg}
              src={about_foto1}
              alt="prelegenci konferencji"
            />
            <svg
              className={`${css.aboutConferenceSvg} ${css.aboutConferenceSvg1}   `}
            >
              <use href={sprite + '#aboutPurple'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutConferenceContainer}>
          <div className={css.aboutConferenceWrapper}>
            <h3 className={css.aboutConferenceTitle}>Co chcemy osiągnąć?</h3>
            <p className={css.aboutConferenceText}>
              Celem konferencji jest ukazanie zagrożeń związanych z nadużywaniem
              smartfonów przez dzieci i młodzież szkolną oraz zaproponowanie
              alternatywnych form spędzania przez nich wolnego czasu. W ramach
              „Uwaga! Smartfon” odbywają się wykłady, warsztaty, panele
              dyskusyjne i integracja międzysektorowa.
            </p>
          </div>
          <div className={css.aboutConferenceImgBox}>
            <img
              className={css.aboutConferenceImg}
              src={about_foto2}
              alt="widownia"
            />
            <svg
              className={`${css.aboutConferenceSvg} ${css.aboutConferenceSvg2}   `}
            >
              <use href={sprite + '#aboutViolet'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutConferenceContainer}>
          <div className={css.aboutConferenceWrapper}>
            <h3 className={css.aboutConferenceTitle}>
              Kogo chcemy zaangażować?
            </h3>
            <p className={css.aboutConferenceText}>
              „Uwaga! Smartfon” jest przestrzenią spotkania dla ekspertów,
              naukowców, specjalistów i praktyków z różnych obszarów i dziedzin
              funkcjonujących wokół cyfryzacji. Rdzeniem tematycznym jest
              przeciwdziałanie uzależnieniom i negatywne następstwa nadużywania
              smartfonów. Udział w konferencji był i zawsze pozostanie
              bezpłatny, a jej głównymi odbiorcami są nauczyciele, rodzice,
              specjaliści i aktywiści.
            </p>
          </div>
          <div className={css.aboutConferenceImgBox}>
            <img
              className={css.aboutConferenceImg}
              src={about_foto3}
              alt="widownia"
            />
            <svg
              className={`${css.aboutConferenceSvg} ${css.aboutConferenceSvg3}   `}
            >
              <use href={sprite + '#aboutPink'} />
            </svg>
          </div>
        </div>
        <Button variant="secondary" content="Więcej" />
      </div>
    </Section>
  )
}
export default AboutConference
