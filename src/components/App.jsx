import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header'
import Homepage from './Homepage';
import DetailContainer from './Detail/DetailContainer';

import '../css/App.css'

const App = () => {
  return (
    <div className='container'>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/search" Component={Homepage} />
          <Route path="/details/:country" Component={DetailContainer} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App