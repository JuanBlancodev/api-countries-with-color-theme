import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header'
import Homepage from './Homepage';

import '../css/App.css'

const App = () => {
  return (
    <div className='container'>      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/search" Component={Homepage} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App