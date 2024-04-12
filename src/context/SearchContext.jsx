import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('')
  const [filter, setFilter] = useState(null)
  const navigate = useNavigate()

  const search = (event) => {
    if(event !== undefined) event.preventDefault()

    if(searchInput === '' && filter === null) return;
    
    navigate('/search')
  }

  useEffect(() => {
    search()
  }, [filter])

  return (
    <SearchContext.Provider value={{
      searchInput, setSearchInput,
      filter, setFilter,
      search
    }}>
      { children }
    </SearchContext.Provider>
  )
}

SearchContextProvider.propTypes = { children: PropTypes.node }

export { SearchContext, SearchContextProvider }