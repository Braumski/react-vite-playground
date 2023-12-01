import
import Button from './components/Button'
import ModeToggler from './components/ModeToggler';
import {Dog, Puppy, Bowl} from './components/PropsPassing'
import Counter from './components/UseStateHook'
import UsingImages from './components/UsingImages'

function App() {
  
  return (
    <>
      <ModeToggler />
      <Dog />

      <Counter />
      <UsingImages/>

    </>
  )
}

export default App;