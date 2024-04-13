import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeClassName from '../../helpers/ThemeClassName'

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Border = styled.div`
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;

  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);

  text-align: center;
`

const BordersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  place-items: center;

  gap: 5px;
`

const Borders = ({ borders }) => {
  return (
    <Content>
      <p className="semibold medium">Border Countries:</p>

      <BordersContainer>
        { borders.map((item, index) => (
          <Border className={`item medium ${ThemeClassName()}`} key={index}>{ item }</Border>
        )) }
      </BordersContainer>
    </Content>
  )
}

Borders.propTypes = { borders: PropTypes.array }

export default Borders