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

    const query = searchInput.toLowerCase()
    let queryParams = [], result = [] 
    
    if(searchInput.length > 0){
      result = countries.filter(country => 
        country.name.toLowerCase().includes(query) ||
        country.alpha2Code.toLowerCase().includes(query) ||
        country.alpha3Code.toLowerCase().includes(query) ||
        (country.altSpellings && country.altSpellings.some(str => str.toLowerCase().includes(query))) ||
        country.nativeName.toLowerCase().includes(query)
      )

      queryParams.push(`query=${searchInput}`);
    }

    if(filter !== null){
      if(searchInput.trim().length === 0){
        result = countries
      }
      
      result = result.filter(country => country.region === filter )

      queryParams.push(`region=${filter}`);
    }

    setResults(result)
    setSearchInput('')

    navigate(queryParams.length > 0 ? `?${queryParams.join('&')}` : '')
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