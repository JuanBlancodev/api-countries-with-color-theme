import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import SearchContainer from "./SearchComponent/SearchContainer";
import CountriesContainer from "./Countries/CountriesContainer"
import ButtonBack from './ButtonBack';
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

const Homepage = () => {
  const [search, setSearch] = useState(null)
  const location = useLocation()
  const { sortRandomCountries } = useGlobalContext()
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
        
        <ButtonBack />
        
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