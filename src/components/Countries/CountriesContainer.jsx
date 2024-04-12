import { useState, useEffect } from 'react'
import styled from 'styled-components'
import useGlobalContext from '../../hooks/useGlobalContext'
import Country from './Country'

const Wrapper = styled.div`
  margin-top: 50px;

  width: 100%;

  display: grid;
  justify-content: center;
`

const Content = styled.main`
  width: 300px;
  max-width: 300px;

  display: grid;
  gap: 50px;
`

const CountriesContainer = () => {
  const { countries } = useGlobalContext()
  const [info, setInfo] = useState([])

  useEffect(() => {
    if(countries !== undefined){
      const scrambled = countries.sort(() => 0.5 - Math.random())
      setInfo(scrambled.slice(0, 5))
    }
  }, [countries])

  if(countries === undefined){
    return null
  }

  return (
    <Wrapper>
      <Content>
        { info.map((value, index) => (
          <Country data={value} key={index} />
        )) }
      </Content>
    </Wrapper>
  )
}

export default CountriesContainer