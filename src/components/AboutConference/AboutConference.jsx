import Section from '../Section/Section'
import css from './AboutConference.module.css'
import Button from '../Button/Button'

const AboutConference = () => {
  return (
    <Section>
      <div className={css.container}>
        <div className={css.AboutConference}>
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
            className={css.AboutConferenceImg}
            src="src\assets\images\about_foto1.png"
            alt="prelegenci konferencji"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.VisibilityMobile}`}
            src="src\assets\images\about_Vector1.png"
            alt=""
          />
          <img
            className={`${css.AboutConferenceVector} ${css.Visibility}`}
            src="src\assets\images\about_Vector1_765.png"
            alt=""
          />
        </div>
        <div className={`${css.AboutConference} ${css.AboutConference2}`}>
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
            className={`${css.AboutConferenceImg} ${css.AboutConferenceImg2}`}
            src="src\assets\images\about_foto2.png"
            alt="widownia"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector2}`}
            src="src\assets\images\about_Vector2.png"
            alt=""
          />
        </div>
        <div className={`${css.AboutConference} ${css.AboutConference3}`}>
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
            className={`${css.AboutConferenceImg} ${css.AboutConferenceImg3}`}
            src="src\assets\images\about_foto3.png"
            alt="scena"
          />
          <img
            className={`${css.AboutConferenceVector} ${css.AboutConferenceVector3} ${css.VisibilityMobile}`}
            src="src\assets\images\about_Vector3.png"
            alt=""
          />
          <img
            className={`${css.AboutConferenceVector} ${css.Visibility} ${css.AboutConferenceVector3}`}
            src="src\assets\images\about_Vector3_765.png"
            alt=""
          />
        </div>
        <Button variant="secondary" content="Więcej"></Button>
      </div>
    </Section>
  )
}

export default AboutConference
