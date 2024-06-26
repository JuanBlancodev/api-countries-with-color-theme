import styled from 'styled-components'
import PropTypes from 'prop-types'

const FlagContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 210px;
  overflow: hidden;

  border-radius: 5px 5px 0 0;

  @media (width >= 1200px){
    grid-column: span 5;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CountryFlag = ({ flag, name }) => {
  return (
    <FlagContainer>
      <Img src={flag} alt={name} />
    </FlagContainer>
  )
}

CountryFlag.propTypes = { 
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default CountryFlag