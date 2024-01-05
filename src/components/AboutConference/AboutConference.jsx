import Section from '../Section/Section'
import css from './AboutConference.module.css'
import Button from '../Button/Button'
import {
  about_Vector1,
  about_Vector1_mobile,
  about_Vector2,
  about_Vector2_mobile,
  about_Vector3,
  about_Vector3_mobile,
  about_foto1,
  about_foto1_mobile,
  about_foto2,
  about_foto2_mobile,
  about_foto3,
  about_foto3_mobile,
} from '../../assets/images/AboutConference'

const AboutConference = () => {
  return (
    <Section sectionClass={css.AboutConference}>
      <div className={css.AboutConferenceBox}>
        <div className={css.AboutConferenceContainer}>
          <div className={css.AboutConferenceWraper}>
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
            className={`${css.AboutConferenceImg} ${css.VisibilityMobile}`}
            src={about_foto1_mobile}
            alt="prelegenci konferencji"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector1} ${css.VisibilityMobile} `}
            src={about_Vector1_mobile}
            alt=""
          />

          <img
            className={`${css.AboutConferenceImg} ${css.Visibility}`}
            src={about_foto1}
            alt="prelegenci konferencji"
          />

          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector1} ${css.Visibility}`}
            src={about_Vector1}
            alt=""
          />
        </div>
        <div
          className={`${css.AboutConferenceContainer} ${css.AboutConferenceContainer2}`}
        >
          <div
            className={`${css.AboutConferenceWraper} ${css.AboutConferenceWraper2}`}
          >
            <h3
              className={`${css.AboutConferenceTitle} ${css.AboutConferenceTitle2}`}
            >
              Co chcemy osiągnąć?
            </h3>
            <p
              className={`${css.AboutConferenceText} ${css.AboutConferenceText2}`}
            >
              Celem konferencji jest ukazanie zagrożeń związanych z nadużywaniem
              smartfonów przez dzieci i młodzież szkolną oraz zaproponowanie
              alternatywnych form spędzania przez nich wolnego czasu. W ramach
              „Uwaga! Smartfon” odbywają się wykłady, warsztaty, panele
              dyskusyjne i integracja międzysektorowa.
            </p>
          </div>
          <img
            className={`${css.AboutConferenceImg} ${css.AboutConferenceImg2} ${css.VisibilityMobile}`}
            src={about_foto2_mobile}
            alt="widownia"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector2}  ${css.VisibilityMobile} `}
            src={about_Vector2_mobile}
            alt=""
          />
          <img
            className={`${css.AboutConferenceImg} ${css.AboutConferenceImg2} ${css.Visibility}`}
            src={about_foto2}
            alt="prelegenci konferencji"
          />

          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector2} ${css.Visibility}`}
            src={about_Vector2}
            alt=""
          />
        </div>
        <div
          className={`${css.AboutConferenceContainer} ${css.AboutConferenceContainer3}`}
        >
          <div className={css.AboutConferenceWraper}>
            <h3
              className={`${css.AboutConferenceTitle} ${css.AboutConferenceTitle3}`}
            >
              Kogo chcemy zaangażować?
            </h3>
            <p
              className={`${css.AboutConferenceText} ${css.AboutConferenceText3}`}
            >
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
            className={`${css.AboutConferenceImg} ${css.AboutConferenceImg3} ${css.VisibilityMobile}`}
            src={about_foto3_mobile}
            alt="prelegenci konferencji"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector3} ${css.VisibilityMobile} `}
            src={about_Vector3_mobile}
            alt=""
          />
          <img
            className={`${css.AboutConferenceImg} ${css.AboutConferenceImg3} ${css.Visibility}`}
            src={about_foto3}
            alt="prelegenci konferencji"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector3} ${css.Visibility}`}
            src={about_Vector3}
            alt=""
          />
        </div>
        <Button variant="secondary" content="Więcej"></Button>
      </div>
    </Section>
  )
}

export default AboutConference
