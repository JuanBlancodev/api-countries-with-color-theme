import styled from 'styled-components'
import SearchInput from './SearchInput'
import Regions from './Regions'

const Wrapper = styled.div`
  display: grid;
  padding: 35px 10px;

  @media (width >= 620px){
    grid-template-columns: repeat(12, 1fr);
  }
`

const Content = styled.div`
  display: grid;
  gap: 20px;

  @media (width >= 620px){
    grid-template-columns: repeat(6, 1fr);
    grid-column: 1 / 12;

    gap: 0;

    :first-child{
      grid-column: 1 / 5;
    }

    :last-child{
      grid-column: 7 / -1;
    }
  }

  @media (width >= 1024px){
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2 / 12;

    :first-child{
      grid-column: 1 / 7;
    }

    :last-child{
      grid-column: 11 / -1;
    }
  }
`

const SearchContainer = () => {
  return (
    <Wrapper>
      <Content>
        <SearchInput />
        <Regions />
      </Content>
    </Wrapper>
  )
}

export default SearchContainer