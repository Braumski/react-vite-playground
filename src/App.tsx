import Button from './components/Button'
import ModeToggler from './components/ModeToggler';
import {Dog, Puppy, Bowl} from './components/PropsPassing'
import Counter from './components/UseStateHook'

function App() {
  
  return (
    <>
      <ModeToggler />
      <Dog />

      <Counter />

    </>
  )
}

export default App;