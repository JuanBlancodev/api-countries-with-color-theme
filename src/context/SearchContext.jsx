import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import useGlobalContext from '../hooks/useGlobalContext'

const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('')
  const [filter, setFilter] = useState(null)
  const { countries, setResults } = useGlobalContext()
  const navigate = useNavigate()

  const search = (event) => {
    if(event !== undefined) event.preventDefault()

    if(searchInput === '' && filter === null) return;

    const query = searchInput.trim().toLowerCase()
    let queryParams = [], result = countries
    
    if(searchInput.length > 0){
      result = countries.filter(country => 
        country.name.toLowerCase().includes(query) ||
        country.alpha2Code.toLowerCase().includes(query) ||
        country.alpha3Code.toLowerCase().includes(query) ||
        country.nativeName.toLowerCase().includes(query)
      )

      queryParams.push(`query=${encodeURIComponent(searchInput)}`);
    }

    if(filter !== null){
      result = result.filter(country => country.region === filter )

      queryParams.push(`region=${filter}`);
    }

    navigate(queryParams.length > 0 ? `/search?${queryParams.join('&')}` : '')

    setResults(result)
    setSearchInput('')

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