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
  const [countries, setCountries] = useState(undefined)

  useEffect(() => {
    const fetchCountries = async () => {
      const data = localStorage.getItem(LOCAL_STORAGE_COUNTRIES)
      if(data !== null){
        setCountries(JSON.parse(data))
      }
      else{
        const result = await axios.get('data.json')
        setCountries(result.data)
        localStorage.setItem(LOCAL_STORAGE_COUNTRIES, JSON.stringify(result.data))
      }
    }

    fetchCountries()
  }, [])

  const toggleThemeMode = () => {
    localStorage.setItem(LOCAL_STORAGE_THEME, !darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <GlobalContext.Provider value={{
      darkMode,
      toggleThemeMode,
      countries
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = { children: PropTypes.node }

export { GlobalContext, GlobalContextProvider }