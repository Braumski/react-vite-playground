// React
import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

// My files
import ModeToggler from './components/ModeToggler';
import {Dog} from './components/PropsPassing'
import ReactVideoPlayerLibrary from './components/ReactVideoPlayerLibrary';
import Counter from './components/Counter'
import UsingImages from './components/UsingImages'


export default function App() {
  const [isDark, setIsDark] = useState(true)
  return (
    <div className="App" id="light">
      <ModeToggler isDark={isDark} setIsDark={setIsDark}/>

      <nav className="nav">
        {/* Link Tags replace Anchor or <a href> tags in React */}
        <Link to="/dog-homepage" className="nav-item">Dog</Link>
        <Link to="/counter" className="nav-item">Counter</Link>
        <Link to="/cat" className="nav-item">My Cat</Link>
        <Link to="/cool-song" className="nav-item">Cool Song</Link>
      </nav>

      <Routes>
        <Route path="/dog-homepage" element={<Dog />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/cat" element={<UsingImages/>} />
        <Route path="/cool-song" element={<ReactVideoPlayerLibrary/>} />
      </Routes>
    </div>
  )
}