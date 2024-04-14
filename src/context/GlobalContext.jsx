import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { LOCAL_STORAGE_THEME, LOCAL_STORAGE_COUNTRIES } from '../config/cfg'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const themeMode = localStorage.getItem(LOCAL_STORAGE_THEME);
    return themeMode === 'true';
  });
  const [countries, setCountries] = useState([])
  const [results, setResults] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = localStorage.getItem(LOCAL_STORAGE_COUNTRIES);
        if (data !== null) {
          setCountries(JSON.parse(data));
        } else {
          const result = await axios.get('data.json');
          setCountries(result.data);
          localStorage.setItem(LOCAL_STORAGE_COUNTRIES, JSON.stringify(result.data));
        }

      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    
    fetchCountries()
  }, [])

  useEffect(() => {
    sortRandomCountries()
  }, [countries])

  useEffect(() => {
    document.body.className = `${darkMode ? 'dark-mode' : 'light-mode'}`
  }, [darkMode])

  const sortRandomCountries = () => {
    if(countries.length > 0){
      const scrambled = countries.sort(() => 0.5 - Math.random())
      setResults(scrambled.slice(0, 8))
    }
  }

  const toggleThemeMode = () => {
    localStorage.setItem(LOCAL_STORAGE_THEME, !darkMode)
    setDarkMode(!darkMode)
  }

  const screenLoader = (_time) => {
    setLoading(true)
    setTimeout(() => setLoading(false), _time)
  }

  return (
    <GlobalContext.Provider value={{
      darkMode,
      toggleThemeMode,
      countries,
      sortRandomCountries,
      results,
      setResults,
      loading,
      screenLoader
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = { children: PropTypes.node }

export { GlobalContext, GlobalContextProvider }