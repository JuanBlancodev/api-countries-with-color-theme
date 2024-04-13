import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ThemeClassName from '../../helpers/ThemeClassName'
import CountryFlag from './CountryFlag'
import CountryName from './CountryName'
import CountryDetails from './CountryDetails'

const Container = styled(Link)`
  width: 300px;
  height: 420px;

  border-radius: 5px;
  text-decoration: none;
`

const Info = styled.div`
  padding: 20px 25px;
`

const Country = ({ data: { flag, name, population, region, capital } }) => {
  return (
    <Container className={`item shadow country ${ThemeClassName()}`} to={`/details/${encodeURIComponent(name.toLowerCase())}`}>
      <CountryFlag flag={flag} name={name} />
      <Info className="flex flex-column gap-3">
        <CountryName name={name} />
        <CountryDetails population={population} region={region} capital={capital} />
      </Info>
    </Container>
  )
}

Country.propTypes = { data: PropTypes.object.isRequired }

export default Country