// React
import {Routes, Route, Link} from 'react-router-dom'

// My files
import ModeToggler from './components/ModeToggler';
import {Dog, Puppy, Bowl} from './components/PropsPassing'
import ReactVideoPlayerLibrary from './components/ReactVideoPlayerLibrary';
import Counter from './components/Counter'
import UsingImages from './components/UsingImages'


function App() {
  
  return (
    <>
      <ModeToggler />
      <Dog />

      <Counter />
      <UsingImages/>
      <ReactVideoPlayerLibrary/>

      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/conditional-render" element={<ConditionalRender/>} />
      </Routes> */}

    </>
  )
}

export default App;