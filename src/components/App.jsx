import useGlobalContext from '../hooks/useGlobalContext'
import Header from "./Header"

const App = () => {
  const { darkMode } = useGlobalContext()

  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
    </div>
  )
}

export default App