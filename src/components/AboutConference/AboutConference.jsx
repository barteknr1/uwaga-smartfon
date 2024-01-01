import Section from '../Section/Section'
import css from './AboutConference.module.css'

const AboutConference = () => {
  return (
    <Section>
      <div className={css.container}>
        <div className={css.AboutConference}>
          <div className={css.AboutConferenceWraper}>
            <h className={css.AboutConferenceTitle}>O konferencji</h>
            <p className={css.AboutConferenceText}>
              Konferencja „Uwaga! Smartfon” to unikatowe w skali całej Europy
              wydarzenie poświęcone zagadnieniom cyfryzacji i nadmiernemu
              korzystaniu z urządzeń ekranowych przez dzieci i młodzież.
              <br></br>
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
            alt="ludzie siedzący przy stolikach"
          />
          <img
            className={css.AboutConferenceVector}
            src="src\assets\images\about_Vector1.png"
            alt=""
          />
        </div>
        <div className={css.AboutConference2}>
          <div className={css.AboutConferenceWraper2}>
            <h className={css.AboutConferenceTitle2}>Co chcemy osiągnąć?</h>
            <p className={css.AboutConferenceText2}>
              Celem konferencji jest ukazanie zagrożeń związanych z nadużywaniem
              smartfonów przez dzieci i młodzież szkolną oraz zaproponowanie
              alternatywnych form spędzania przez nich wolnego czasu. W ramach
              „Uwaga! Smartfon” odbywają się wykłady, warsztaty, panele
              dyskusyjne i integracja międzysektorowa.
            </p>
          </div>
          <img
            className={css.AboutConferenceImg2}
            src="src\assets\images\about_foto2.png"
            alt="ludzie siedzący przy stolikach"
          />
          <img
            className={css.AboutConferenceVector2}
            src="src\assets\images\about_Vector2.png"
            alt=""
          />
        </div>
        <button className={css.AboutConferenceButton}>Więcej</button>
      </div>
    </Section>
  )
}

export default AboutConference
