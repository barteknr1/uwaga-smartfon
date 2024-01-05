import PropTypes from 'prop-types'

import css from './Footer.module.css'

const Footer = ({text}) => {
  return (
    <footer className={css.footer}>
      <h2 className={css.heading}>{text}</h2>
      <address className={css.contact}>
        <h2 className={css.contactHeading}>
          Masz pytania? <br />
          Zapraszamy do kontaktu
        </h2>
        <div className={css.contactMail}>
          <a
            className={css.contactMail}
            href="mailto:konferencja@uwagasmartfon.pl"
          >
            konferencja@uwagasmartfon.pl
          </a>
        </div>
        <div className={css.adress}>
          <h3 className={css.adressHeading}>Fundacja Projekt PL</h3>
          <p className={css.adressText}>
            Zabłocie 23/1 <br /> 30-701 Kraków <br /> tel. 732 550 480
          </p>
        </div>
        <hr className={css.adressLine}></hr>
        <div className={css.adress}>
          <h3 className={css.adressHeading}>Konferencja Uwaga! Smartfon</h3>
          <p className={css.adressText}>
            Centrum Kongresowe ICE <br /> Marii Konopnickiej 17 <br /> 30-302
            Kraków
          </p>
        </div>
      </address>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Footer
