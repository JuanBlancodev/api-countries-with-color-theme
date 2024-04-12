import useGlobalContext from "../hooks/useGlobalContext";

export default () => {
  const { darkMode } = useGlobalContext()
  return darkMode ? 'dark-mode' : 'light-mode'
}