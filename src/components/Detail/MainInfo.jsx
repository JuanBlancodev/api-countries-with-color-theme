import PropTypes from 'prop-types'

const MainInfo = ({ nativeName, population, region, subregion, capital }) => {
  return (
    <div className="flex flex-column gap-2">
      {nativeName && (
        <p className="semibold medium">
          Native Name: <span className="normal medium">{nativeName}</span>
        </p>
      )}
      {population && (
        <p className="semibold medium">
          Population: <span className="normal medium">{population.toLocaleString()}</span>
        </p>
      )}
      {region && (
        <p className="semibold medium">
          Region: <span className="normal medium">{region}</span>
        </p>
      )}
      {subregion && (
        <p className="semibold medium">
          Sub Region: <span className="normal medium">{subregion}</span>
        </p>
      )}
      {capital && (
        <p className="semibold medium">
          Capital: <span className="normal medium">{capital}</span>
        </p>
      )}
    </div>
  );
};

MainInfo.propTypes = {
  nativeName: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  subregion: PropTypes.string,
  capital: PropTypes.string
}

export default MainInfo;
