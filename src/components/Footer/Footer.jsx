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
        <iframe
          className={css.map}
          width="550"
          height="413"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=550&amp;height=413&amp;hl=en&amp;q=ICE%20Krak%C3%B3w%20%20Krak%C3%B3w+(ICE%20Krak%C3%B3w%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://projektpl.org/">
          <img
            src="./src/assets/images/footer/projektpl.png"
            alt="logo firmy fundacja projektpl"
            className={css.logo}
          />
        </a>
      </address>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=dc3828865966bed71e78404cccc30a502e7aa613"
      ></script>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Footer
