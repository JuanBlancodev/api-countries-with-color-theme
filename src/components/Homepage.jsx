import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import SearchContainer from "./SearchComponent/SearchContainer";
import CountriesContainer from "./Countries/CountriesContainer"
import useGlobalContext from '../hooks/useGlobalContext'

const Div = styled.div`
  margin: 0 35px;
`

const H3 = styled.h3`
  font-size: 1.3rem;
`

const Span = styled.span`
  text-decoration: underline;
`

const Button = styled(Link)`
  max-width: 130px;
  padding: 10px 35px;

  text-decoration: none;
  
  color: inherit;

  border-radius: 5px;
`

const Homepage = () => {
  const [search, setSearch] = useState(null)
  const location = useLocation()
  const { darkMode, sortRandomCountries } = useGlobalContext()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get('query') || params.get('region')

    setSearch(query)

    if(location.pathname === '/' && query === null){
      sortRandomCountries()
      setSearch(null)
      return;
    }
  }, [location.pathname, location.search])

  return (
    <>
      <SearchContainer />

      {search !== null && (
       <Div className="flex flex-column gap-3">
        
        <Button 
          className={`flex gap-1 align-center item shadow large semibold 
            ${darkMode ? 'dark-mode' : 'light-mode'}`} 
          to='/'>
            <FontAwesomeIcon className='small' icon={faLeftLong} />
            Back
        </Button>

        <H3>
          Results for: <Span>{ search }</Span>
        </H3>
       </Div>
      )}

      <CountriesContainer />
    </>
  )
}

export default Homepage