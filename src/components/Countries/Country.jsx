import styled from 'styled-components'
import PropTypes from 'prop-types'
import ThemeClassName from '../../helpers/ThemeClassName'
import CountryFlag from './CountryFlag'
import CountryName from './CountryName'
import CountryDetails from './CountryDetails'

const Container = styled.a`
  width: 100%;
  height: 400px;

  border-radius: 5px;
  text-decoration: none;
`

const Info = styled.div`
  padding: 20px 25px;
`

const Country = ({ data: { flag, name, population, region, capital } }) => {
  return (
    <Container className={`item shadow country ${ThemeClassName()}`} href={`/details/${name}`}>
      <CountryFlag flag={flag} />
      <Info className="flex flex-column gap-3">
        <CountryName name={name} />
        <CountryDetails population={population} region={region} capital={capital} />
      </Info>
    </Container>
  )
}

Country.propTypes = { data: PropTypes.object.isRequired }

export default Country