import PropTypes from 'prop-types'
import styled from 'styled-components'

import MainInfo from './MainInfo'
import SecondaryInfo from './SecondaryInfo'
import Borders from './Borders'

const Wrapper = styled.div`
  display: grid;
  gap: 20px;

  align-items: start;

  div:nth-child(3){
    margin: 35px 0;
  }
`

const DetailInfo = ({ data }) => {
  return (
    <Wrapper>
      <h1>{ data.name }</h1>

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
      
      <Borders borders={data.borders} />
    </Wrapper>
  )
}

DetailInfo.propTypes = {
  data: PropTypes.object
}

export default DetailInfo