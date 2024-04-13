import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import useGlobalContext from '../../hooks/useGlobalContext'
import ButtonBack from "../ButtonBack"
import CountryFlag from '../Countries/CountryFlag'
import DetailInfo from './DetailInfo'

const Wrapper = styled.div`
  margin: 40px 20px;

  display: grid;
  gap: 50px;
`

const Content = styled.div`
  display: grid;
  gap: 30px;

  @media (width >= 620px){
    grid-template-columns: 1fr 1fr;
  }

  @media (width >= 1200px){
    grid-template-columns: repeat(12, 1fr);

    div:first-child{
      grid-column: 1 / 7;
    }

    div:last-child{
      grid-column: 6 / -1;
    }
  }
`

const DetailContainer = () => {
  const { countries } = useGlobalContext()
  const [countryInfo, setCountryInfo] = useState(undefined)
  const { country } = useParams()

  useEffect(() => {
    const result = countries.filter(item => item.name.toLowerCase() === country)
    setCountryInfo(result[0])
  }, [countries])

  if(countryInfo === undefined){
    return null
  }

  return (
    <Wrapper>
      <ButtonBack />
      <Content>
        <CountryFlag flag={countryInfo.flag} name={countryInfo.name} />
        <DetailInfo data={countryInfo} />
      </Content>
    </Wrapper>
  )
}

export default DetailContainer