import PropTypes from 'prop-types'

const CountryName = ({ name }) => {
  return (
    <h2 className="bold">
      { name }
    </h2>
  )
}

CountryName.propTypes = {
  name: PropTypes.string.isRequired
}

export default CountryName