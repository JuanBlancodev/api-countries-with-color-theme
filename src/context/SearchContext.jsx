import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'
import useGlobalContext from '../hooks/useGlobalContext'

const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [searchInput, setSearchInput] = useState('')
  const [filter, setFilter] = useState(null)
  const { countries, setResults, screenLoader } = useGlobalContext()

  useEffect(() => {
    search()
  }, [filter])

  useEffect(() => {
    if(location.pathname === '/'){
      setFilter(null)
    }
    else if(location.pathname === '/search'){
      search()
    }
  }, [location.pathname])

  const search = (event) => {
    if(event !== undefined) event.preventDefault()

    if(searchInput === '' && filter === null) return;
    screenLoader(1000)

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