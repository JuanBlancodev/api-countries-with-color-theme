import PropTypes from "prop-types";

const SecondaryInfo = ({ topLevelDomain, currencies, languages }) => {
  return (
    <div className="flex flex-column gap-2">
      <p className="semibold medium">
        Top Level Domain: <span className="normal medium">{ topLevelDomain.map(item => item).join(', ') }</span>
      </p>
      <p className="semibold medium">
        Currencies:{" "}
        <span className="normal medium">
          {currencies.map((currency) => currency.name).join(", ")}
        </span>
      </p>
      <p className="semibold medium">
        Languages:{" "}
        <span className="normal medium">
          {languages.map((language) => language.name).join(", ")}
        </span>
      </p>
    </div>
  );
};

SecondaryInfo.propTypes = {
  topLevelDomain: PropTypes.array,
  currencies: PropTypes.array,
  languages: PropTypes.array,
};

export default SecondaryInfo;
