import PropTypes from "prop-types";
import styled from 'styled-components'

const Content = styled.div`
  @media (width >= 1024px){
    justify-self: center;
  }

  @media (width >= 1200px){
    justify-self: end;
  }
`

const SecondaryInfo = ({ topLevelDomain, currencies, languages }) => {
  return (
    <Content className="flex flex-column gap-2">
      {topLevelDomain && (
        <p className="semibold medium">
          Top Level Domain: <span className="normal medium">{ topLevelDomain.map(item => item).join(', ') }</span>
        </p>
      )}
      {currencies && (
        <p className="semibold medium">
          Currencies:{" "}
          <span className="normal medium">
            {currencies.map((currency) => currency.name).join(", ")}
          </span>
        </p>
      )}
      {languages && (
        <p className="semibold medium">
          Languages:{" "}
          <span className="normal medium">
            {languages.map((language) => language.name).join(", ")}
          </span>
        </p>
      )}
    </Content>
  );
};

SecondaryInfo.propTypes = {
  topLevelDomain: PropTypes.array,
  currencies: PropTypes.array,
  languages: PropTypes.array,
};

export default SecondaryInfo;
