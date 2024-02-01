import PropTypes from 'prop-types'

const Section = ({title, children, sectionClass, titleClass, id}) => {
  return (
    <section id={id} className={`${sectionClass}`}>
      {title ? <h2 className={`${titleClass}`}>{title}</h2> : null}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  sectionClass: PropTypes.string,
  titleClass: PropTypes.string,
  id: PropTypes.string,
}

export default Section
