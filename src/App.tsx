// React
import { createContext,  useState } from 'react'

//Library
import {Routes, Route, NavLink} from 'react-router-dom'
import ReactSwitch from "react-switch";



// My files
import {Dog} from './components/PropsPassing'
import ReactVideoPlayerLibrary from './components/ReactVideoPlayerLibrary';
import Counter from './components/Counter'
import UsingImages from './components/UsingImages'
import DataComponent from './components/Data';


//  Context
export const ThemeContext = createContext()



export default function App() {
  const [ theme, setTheme ] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    // the "light" id is for dark mode and light mode
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>

      <div className="nav-and-switch">
        <ReactSwitch 
          onChange={toggleTheme} 
          checked={theme === "dark"}
        />
        <nav>
          <ul className="nav-list">
            <li className="nav-item" id={theme}>
              <NavLink to="/dog-homepage"  >Dog</NavLink>
            </li>
            <li className="nav-item" id={theme}>
              <NavLink to="/counter" >Counter</NavLink>
            </li>
            <li className="nav-item" id={theme}>
              <NavLink to="/cat" >My Cat</NavLink>
            </li>
            <li className="nav-item" id={theme}>
              <NavLink to="/cool-song" >Cool Song</NavLink>
            </li>
            <li className="nav-item" id={theme}>
              <NavLink to="/data" >Data</NavLink>
            </li>
          </ul>
          {/* Link Tags replace Anchor or <a href> tags in React */}
          {/* These links add components to the page. I think they replace each
          other because they are from the same navbar */}
        </nav>
      </div>

        {/* React routing is managed by third party libraries. The one I am using here
        is called react-router-dom */}

        {/* npm install react-router-dom */}
        {/* Check the BrowserRouter tag in the "main.tsx" file */}
        <Routes>
          <Route path="/dog-homepage" element={<Dog />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/cat" element={<UsingImages/>} />
          <Route path="/cool-song" element={<ReactVideoPlayerLibrary/>} />
          <Route path="/data" element={<DataComponent/>} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}


