import { createContext, useState } from 'react'

const GlobalContext = createContext()

const GlobalContextProvider = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <GlobalContext.Provider value={{
      darkMode,
      setDarkMode
    }}>

    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }