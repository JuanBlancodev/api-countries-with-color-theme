import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useGlobalContext from '../hooks/useGlobalContext';
import { PATHNAME_ROOT, PATHNAME_SEARCH } from '../config/cfg';

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
          <Route path='/' element={<Navigate to="/asd" />} />
          <Route path={`/${PATHNAME_ROOT}`} Component={Homepage}  />
          <Route path={`/${PATHNAME_SEARCH}`} Component={Homepage} />
          <Route path="/details/:country" Component={DetailContainer} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App