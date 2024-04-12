import PropTypes from 'prop-types'
import styled from 'styled-components'
import useSearchContext from '../../hooks/useSearchContext'

const Item = styled.li`
  padding: 10px;
  cursor: pointer;
`

const RegionItem = ({ value, isNull }) => {
  const { setFilter } = useSearchContext()

  return (
    <Item 
      className='semibold' 
      onClick={() => setFilter(isNull ? null : value)}
    >
      { value }
    </Item>
  )
}

RegionItem.propTypes = { 
  value: PropTypes.string.isRequired,
  isNull: PropTypes.bool
}

export default RegionItem