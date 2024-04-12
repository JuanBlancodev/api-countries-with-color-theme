import styled from 'styled-components'
import ThemeClassName from '../../helpers/ThemeClassName'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useSearchContext from '../../hooks/useSearchContext'

const Container = styled.form`
  width: 95%;
  max-height: 55px;

  padding: 18px;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;

  padding-top: 5px;

  background: none;
  border: none;
  outline: none;
`

const SearchInput = () => {
  const { searchInput, setSearchInput, search } = useSearchContext()

  return (
    <Container 
      className={`item shadow flex gap-5 align-center color-dark-gray ${ThemeClassName()} `}
      onSubmit={search}
    >
      <FontAwesomeIcon icon={faSearch} />
      <Input 
        type="search" 
        placeholder='Search for a country...' 
        className='medium'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </Container>
  )
}

export default SearchInput