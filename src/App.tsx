// React
import { createContext,  useState } from 'react'

//Library
import {Routes, Route, Link} from 'react-router-dom'

// My files
import {Dog} from './components/PropsPassing'
import ReactVideoPlayerLibrary from './components/ReactVideoPlayerLibrary';
import Counter from './components/Counter'
import UsingImages from './components/UsingImages'
import ModeToggler from './components/ModeToggler';

//  Context
export const ThemeContext = createContext({})



export default function App() {
  const [ theme, setTheme ] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    // the "light" id is for dark mode and light mode
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>

        <ModeToggler toggleTheme={toggleTheme} />

        <nav className="nav">
          {/* Link Tags replace Anchor or <a href> tags in React */}
          {/* These links add components to the page. I think they replace each
          other because they are from the same navbar */}
          <Link to="/dog-homepage" className="nav-item">Dog</Link>
          <Link to="/counter" className="nav-item">Counter</Link>
          <Link to="/cat" className="nav-item">My Cat</Link>
          <Link to="/cool-song" className="nav-item">Cool Song</Link>
        </nav>

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


