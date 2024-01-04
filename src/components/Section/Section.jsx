import PropTypes from 'prop-types'

const Section = ({title, children, sectionClass, titleClass}) => {
  return (
    <section className={`${sectionClass}`}>
      <h2 className={`${titleClass}`}>{title}</h2>
      <div>{children}</div>
      
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sectionClass: PropTypes.string,
  titleClass: PropTypes.string,
}

export default Section
