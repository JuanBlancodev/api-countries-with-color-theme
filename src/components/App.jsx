import Header from "./Header"
import CountriesContainer from "./Countries/CountriesContainer"

import ThemeClassName from "../helpers/ThemeClassName"

import '../css/App.css'

const App = () => {
  return (
    <div className={`container ${ThemeClassName()}`}>
      <Header />
      <CountriesContainer />
    </div>
  )
}

export default App