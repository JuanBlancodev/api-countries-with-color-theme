import styled from 'styled-components'
import PropTypes from 'prop-types'

const FlagContainer = styled.div`
  width: 100%;
  height: 210px;
  overflow: hidden;

  border-radius: 5px 5px 0;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CountryFlag = ({ flag }) => {
  return (
    <FlagContainer>
      <Img src={flag} />
    </FlagContainer>
  )
}

CountryFlag.propTypes = { 
  flag: PropTypes.string.isRequired
}

export default CountryFlag