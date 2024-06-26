import PropTypes from 'prop-types'
import styled from 'styled-components'

import MainInfo from './MainInfo'
import SecondaryInfo from './SecondaryInfo'
import Borders from './Borders'

const Wrapper = styled.div`
  display: grid;
  gap: 20px;

  align-items: start;

  @media (width >= 1200px){
    grid-column: span 3;
  }
`

const Info = styled.div`
  display: grid;
  row-gap: 35px;

  @media (width >= 1024px){
    grid-template-columns: repeat(2, 250px);
  }
`

const DetailInfo = ({ data }) => {
  return (
    <Wrapper>
      <h1>{ data.name }</h1>

      <Info>
        <MainInfo 
          nativeName={data.nativeName}
          population={data.population}
          region={data.region}
          subregion={data.subregion}
          capital={data.capital}
        />

        <SecondaryInfo 
          topLevelDomain={data.topLevelDomain}
          currencies={data.currencies}
          languages={data.languages}
        />
        
        { data.borders && <Borders borders={data.borders} /> }
      </Info>
    </Wrapper>
  )
}

DetailInfo.propTypes = {
  data: PropTypes.object
}

export default DetailInfo