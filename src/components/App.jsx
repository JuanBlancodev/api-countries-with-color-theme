import ThemeClassName from "../helpers/ThemeClassName"
import Header from "./Header"

import '../css/App.css'

const App = () => {
  return (
    <div className={`container ${ThemeClassName()}`}>
      <Header />
    </div>
  )
}

export default App