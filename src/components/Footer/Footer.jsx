import PropTypes from 'prop-types'

import css from './Footer.module.css'

const Footer = ({text}) => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerHeading}>{text}</h2>
      <div className={css.footerContact}>
        <h2 className={css.footerContactHeading}>
          Masz pytania? <br />
          Zapraszamy do kontaktu
        </h2>
        <div className={css.footerContactMail}>
          <a
            className={css.footerContactMail}
            href="mailto:konferencja@uwagasmartfon.pl"
          >
            konferencja@uwagasmartfon.pl
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Footer
