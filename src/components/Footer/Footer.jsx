import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'

import icon from '../../assets/svg/sprite.svg'
import css from './Footer.module.css'

const Footer = ({text}) => {
  const {t} = useTranslation()

  return (
    <footer className={css.footer}>
      <h2 className={css.heading}>{text}</h2>
      <address className={css.contact}>
        <h2 className={css.contactHeading}>
          {t('footer.title1')}
          <br />
          {t('footer.title2')}
        </h2>
        <div className={css.contactMail}>
          <a
            className={css.contactMailAdress}
            href="mailto:konferencja@uwagasmartfon.pl"
          >
            <svg className={css.contactMailIcon}>
              <use href={`${icon}#mail`}></use>
            </svg>
            konferencja@uwagasmartfon.pl
          </a>
        </div>
        <div className={css.adressContainer}>
          <div className={css.adress}>
            <h3
              className={`${css.adressHeading} ${css.adressHeadingFundation}`}
            >
              {t('footer.adres1')}
            </h3>
            <p className={`${css.adressText} ${css.adressTextFundation}`}>
              Zabłocie 23/1 <br /> 30-701 Kraków <br /> tel. 732 550 480
            </p>
            <hr className={css.adressLine}></hr>
            <h3
              className={`${css.adressHeading} ${css.adressHeadingConference}`}
            >
              {t('footer.adres2')}
            </h3>
            <p className={`${css.adressText} ${css.adressTextConference}`}>
              Centrum Konferencyjne <br />
              Fabryczna CKF_13 <br />
              ul. Fabryczna 13
              <br /> 31-553 Kraków
            </p>
          </div>

          <iframe
            className={css.map}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?&amp;hl=en&amp;q=ckf%2013%20Krak%C3%B3w+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <a href="https://projektpl.org/">
          <img
            className={css.logo}
            src="./src/assets/images/footer/projektpl.png"
            alt="logo firmy fundacja projektpl"
          />
        </a>

        <ul className={css.socialList}>
          <li className={css.socialListItem}>
            <a
              href="https://www.facebook.com/ProjektPL.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socialListItemIcon}>
                <use href={`${icon}#facebook`}></use>
              </svg>
            </a>
          </li>
          <li className={css.socialListItem}>
            <a
              href="https://www.youtube.com/@fundacjaprojektpl2306"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={`${css.socialListItemIcon} ${css.iconYT}`}>
                <use href={`${icon}#youtube`}></use>
              </svg>
            </a>
          </li>
          <li className={css.socialListItem}>
            <a
              href="https://www.linkedin.com/company/projekt-pl-foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={css.socialListItemIcon}>
                <use href={`${icon}#linkedin`}></use>
              </svg>
            </a>
          </li>
        </ul>
        <div className={css.statuteContainer}>
          <ul className={css.statuteList}>
            <li className={css.statuteListItem}>
              <a href="https://uwagasmartfon.pl/wp-content/uploads/2023/03/UWAGA-SMARTFON-Polityka-prywatnosci2023.pdf">
                {t('footer.privatePolicy')}
              </a>
            </li>
            <li className={css.statuteListItem}>
              <a href="https://uwagasmartfon.pl/RODO/">RODO</a>
            </li>
            <li className={css.statuteListItem}>
              <a href="https://uwagasmartfon.pl/wp-content/uploads/2023/03/UWAGA-SMARTFON-Regulamin2023.pdf">
                {t('footer.regulamin')}
              </a>
            </li>
          </ul>
          <p className={css.allRightsParagraf}>
            © 2023 Fundacja ProjektPL. All rights reserved
          </p>
        </div>
      </address>
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=6b87c2c524390684a6c28d38c29058170ed7c9f9"
      ></script>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Footer
