import css from './Footer.module.css'

const Footer = ({text}) => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerHeading}>{text}</h2>
    </footer>
  )
}

export default Footer
