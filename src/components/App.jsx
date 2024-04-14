import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useGlobalContext from '../hooks/useGlobalContext';

import Header from './Header'
import Homepage from './Homepage';
import DetailContainer from './Detail/DetailContainer';
import ScreenLoader from './ScreenLoader';

import '../css/App.css'

const App = () => {
  const { loading, screenLoader } = useGlobalContext()

  useEffect(() => {
    screenLoader(1000)
  }, [])

  return (
    <div className='container'>      
      <BrowserRouter>
        <Header />
        {loading && <ScreenLoader /> }
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