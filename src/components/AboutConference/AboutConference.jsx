import Section from '../Section/Section'
import css from './AboutConference.module.css'

const AboutConference = () => {
  return (
    <Section
      title="O konferencji"
      sectionClass={css.AboutConference}
      titleClass={css.AboutConferenceTitle}
    >
      <div className={css.container}>
        <div className={css.AboutConference}>
          <h className={css.AboutConferenceTitle}>O konferencji</h>
          <p className={css.AboutConferenceText}>
            Konferencja „Uwaga! Smartfon” to unikatowe w skali całej Europy
            wydarzenie poświęcone zagadnieniom cyfryzacji i nadmiernemu
            korzystaniu z urządzeń ekranowych przez dzieci i młodzież. Spotykamy
            się w gronie wybitnych specjalistów z dziedziny pedagogiki,
            psychologii i psychiatrii oraz ekspertów i popularyzatorów wiedzy o
            cyfrowych zagrożeniach i cyfrowej higienie. Dyskutujemy m.in. o
            „uzależnieniu od ekranów”, cyfryzacji edukacji, kwestii smartfonów w
            szkołach i roli nowoczesnych technologii w życiu społecznym.
          </p>
          <img
            className={css.AboutConferenceImg}
            src="../../assets/images/about_foto1.png"
            alt="ludzie siedzący przy stolikach"
          />
          <img
            className={css.AboutConferenceVector}
            src="../../assets/images/about_Vector1.png"
            alt=""
          />
        </div>
        <button className={css.AboutConferenceButton}>Więcej</button>
      </div>
    </Section>
  )
}

export default AboutConference
