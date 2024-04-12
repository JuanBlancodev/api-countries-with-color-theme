import PropTypes from 'prop-types'

const CountryDetails = ({ population, region, capital }) => {
  return (
    <div>
      {population !== undefined && (
        <p className="semibold">
          Population: <span className="normal">{population}</span>
        </p>
      )}
      {region !== undefined && (
        <p className="semibold">
          Region: <span className="normal">{region}</span>
        </p>
      )}
      {capital !== undefined && (
        <p className="semibold">
          Capital: <span className="normal">{capital}</span>
        </p>
      )}
    </div>
  )
}

CountryDetails.propTypes = {
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string
}

export default CountryDetails