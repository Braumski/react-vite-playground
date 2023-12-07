// React
import { createContext,  useState } from 'react'

//Library
import {Routes, Route, Link} from 'react-router-dom'



// My files
import {Dog} from './components/PropsPassing'
import ReactVideoPlayerLibrary from './components/ReactVideoPlayerLibrary';
import Counter from './components/Counter'
import UsingImages from './components/UsingImages'
import ReactSwitch from "react-switch";

//  Context
export const ThemeContext = createContext(null)



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
        <nav className="nav">
          {/* Link Tags replace Anchor or <a href> tags in React */}
          {/* These links add components to the page. I think they replace each
          other because they are from the same navbar */}
          <Link to="/dog-homepage" id={theme} className="nav-item">Dog</Link>
          <Link to="/counter" id={theme} className="nav-item">Counter</Link>
          <Link to="/cat" id={theme} className="nav-item">My Cat</Link>
          <Link to="/cool-song" id={theme} className="nav-item">Cool Song</Link>
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
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}


