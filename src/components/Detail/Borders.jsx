import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ThemeClassName from '../../helpers/ThemeClassName'
import useGlobalContext from '../../hooks/useGlobalContext'

const Content = styled.div`
  display: grid;

  @media (width >= 1200px){
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
  }
`

const Border = styled(Link)`
  width: 100px;
  padding: 3px;
  border-radius: 5px;

  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);

  text-align: center;
  text-decoration: none;

  color: unset;
`

const BordersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 30px);
  place-items: center;

  gap: 10px;
  margin-top: 15px;

  @media (width >= 1200px){
    grid-template-columns: repeat(4, 1fr);
  }
`

const Borders = ({ borders }) => {
  const { countries } = useGlobalContext()

  return (
    <Content>
      <p className="nowarp semibold medium">Border Countries:</p>

      <BordersContainer>
        { borders.map((item, index) => (
          <Border 
            className={`item medium ${ThemeClassName()}`} 
            key={index}
            to={`/details/${encodeURIComponent(countries.filter(country => 
              country.alpha3Code === item).map(country => country.name.toLowerCase()))
            }`}>
              { item }
          </Border>
        )) }
      </BordersContainer>
    </Content>
  )
}

Borders.propTypes = { borders: PropTypes.array }

export default Borders