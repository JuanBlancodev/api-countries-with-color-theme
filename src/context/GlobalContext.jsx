import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <GlobalContext.Provider value={{
      darkMode,
      setDarkMode
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = { children: PropTypes.node }

export { GlobalContext, GlobalContextProvider }