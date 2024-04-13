import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import useGlobalContext from '../hooks/useGlobalContext';

const Button = styled(Link)`
  max-width: 130px;
  padding: 10px 35px;

  text-decoration: none;
  
  color: inherit;

  border-radius: 5px;
`

const ButtonBack = () => {
  const { darkMode } = useGlobalContext()

  return (
    <Button
      className={`flex gap-1 align-center item shadow large semibold 
        ${darkMode ? "dark-mode" : "light-mode"}`}
      to="/"
    >
      <FontAwesomeIcon className="small" icon={faLeftLong} />
      Back
    </Button>
  );
};

export default ButtonBack;
