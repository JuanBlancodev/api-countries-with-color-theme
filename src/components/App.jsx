import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeClassName from '../helpers/ThemeClassName';

import Header from './Header'
import Homepage from './Homepage';
import ResultSearch from './ResultSearch';

import '../css/App.css'

const App = () => {
  return (
    <div className={`container ${ThemeClassName()}`}>
      <Header />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/search" Component={ResultSearch} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App