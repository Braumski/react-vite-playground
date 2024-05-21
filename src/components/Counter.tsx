import { useContext, useState } from 'react'  // Import useState from react
import { ThemeContext } from '../App'

export default function Counter (){
  const {theme} = useContext(ThemeContext)
  const [count, setCount] = useState(0) // In use state, you can determine a starting default value

  // The first value in the array destructuring of useState is always the starting value
  // The second value allows you to update your state.
  function decrementCount(event: React.MouseEvent<HTMLButtonElement>){
    event.ctrlKey ? 
    setCount(prevCount => prevCount - 100)
    :setCount(prevCount=>  prevCount - 1) // Set count is written as a function like so
  }

  function incrementCount(event: React.MouseEvent<HTMLButtonElement>){
    event.ctrlKey ? 
      setCount(prevCount => prevCount + 100)
      :setCount(prevCount=>  prevCount + 1)
  }

  return (
    <>
    <h1>Hold Ctrl + Click to Count 100</h1>
    <div className="counter-container">
      <button id={theme} onClick={decrementCount}> - </button>
      <span id="count-num">{count}</span>
      <button id={theme} onClick={incrementCount}> + </button>
    </div>
    </>
  )
}


