import styled from 'styled-components'
import useGlobalContext from '../../hooks/useGlobalContext'
import Country from './Country'

const Wrapper = styled.section`
  margin-top: 50px;

  width: 100%;

  display: grid;
  justify-content: center;
`

const Content = styled.div`
  // width: 300px;
  // max-width: 300px;

  display: grid;
  gap: 50px;

  @media (width >= 620px){
    width: 100%;
    margin: auto;
    gap: 25px;

    grid-template-columns: repeat(2, 1fr);

  }

  @media (width >= 920px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (width >= 1224px){
    grid-template-columns: repeat(4, 1fr);
  }
`

const CountriesContainer = () => {
  const { results } = useGlobalContext()

  if(results === undefined){
    return null
  }

  return (
    <Wrapper>
      <Content>
        { results.map((value, index) => (
          <Country data={value} key={index} />
        )) }
      </Content>
    </Wrapper>
  )
}

export default CountriesContainer