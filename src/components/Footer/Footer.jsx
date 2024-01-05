import css from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerHeading}>
        Strona została stworzona dzięki pracy Wolontariuszy.
      </h2>
    </footer>
  )
}

export default Footer
