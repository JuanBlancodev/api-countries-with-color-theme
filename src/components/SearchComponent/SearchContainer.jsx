import styled from 'styled-components'
import { SearchContextProvider } from "../../context/SearchContext";
import SearchInput from './SearchInput'
import Regions from './Regions'

const Wrapper = styled.section`
  display: grid;
  padding: 0 10px;

  margin: 35px 0;

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
        <SearchContextProvider>
          <SearchInput />
          <Regions />
        </SearchContextProvider>
      </Content>
    </Wrapper>
  )
}

export default SearchContainer