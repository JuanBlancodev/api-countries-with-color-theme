import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import useGlobalContext from "../hooks/useGlobalContext";
import ThemeClassName from "../helpers/ThemeClassName";

const Content = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;

  @media (width >= 720px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const H1 = styled.h1`
  grid-column: 2 / 4;

  @media (width < 720px) {
    font-size: var(--font-medium);
  }
`;

const Span = styled.span`
  grid-column: 11 / 12;

  cursor: pointer;
  user-select: none;
`;

const Header = () => {
  const { darkMode, toggleThemeMode } = useGlobalContext();

  const icon = darkMode ? faSun : faMoon;
  const text = darkMode ? "Light Mode" : "Dark Mode";

  return (
    <Content className={`item nowarp shadow ${ThemeClassName()}`}>
      <H1 className="large bold">Where in the world?</H1>
      <Span
        className="medium semibold flex align-center gap-1"
        onClick={() => toggleThemeMode()}
      >
        <FontAwesomeIcon icon={icon} />
        {text}
      </Span>
    </Content>
  );
};

export default Header;
