import SearchContainer from "./SearchComponent/SearchContainer";
import CountriesContainer from "./Countries/CountriesContainer"

import '../css/App.css'

const App = () => {
  return (
    <div className='container dark-mode'>
      <SearchContainer />
      <CountriesContainer />
    </div>
  )
}

export default App