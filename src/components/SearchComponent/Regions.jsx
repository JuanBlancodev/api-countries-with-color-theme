import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useSearchContext from '../../hooks/useSearchContext'

import ThemeClassName from '../../helpers/ThemeClassName'
import RegionItem from './RegionItem'

const Container = styled.div`
  min-width: 180px;
  max-width: 220px;
  max-height: 55px;

  position: relative;
  padding: 20px;
  border-radius: 5px;

  cursor: pointer;
`

const Button = styled.button`
  width: 100%;

  &.open{
    .icon{
      transform: rotate(180deg);
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  transition: transform 0.25s;
`

const Menu = styled.div`
  width: 100%;

  position: absolute;
  top: 70px;
  left: 0;

  padding: 0;
  border-radius: 5px;

  overflow: hidden;
  height: 0;

  transition: height 0.25s;

  &.light-mode{
    li:hover{
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &.dark-mode{
    li:hover{
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &.open{
    height: 270px;
  }
`

const ListContainer = styled.ul`
  margin: 15px;
  list-style: none;
`

const Regions = () => {
  const [open, setOpen] = useState(false)
  const regionsList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  const { filter } = useSearchContext()

  return (
    <Container 
      className={`flex nowarp item shadow ${ThemeClassName()}`}
      onClick={() => setOpen(!open)}>
      <Button className={`flex justify-between align-center btn medium ${open ? 'open' : ''}`}>
        { filter === null ? 'Filter by Region' : filter }
        <Icon className="icon" icon={faChevronDown} />
      </Button>

      <Menu className={`menu item ${ThemeClassName()} ${open ? 'open shadow' : ''}`}>
        <ListContainer>
          { filter !== null && (<RegionItem value={'Remove filter'} isNull />) }
          { regionsList.map((value, index) => (
            <RegionItem value={value} key={index} />
          )) }
        </ListContainer>
      </Menu>
    </Container>
  )
}

export default Regions