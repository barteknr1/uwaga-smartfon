import PropTypes from 'prop-types'

import css from './Footer.module.css'

const Footer = ({text}) => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerHeading}>{text}</h2>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Footer
