import { useState } from 'react'  // Import useState from react

export default function Counter (){

  const [count, setCount] = useState(0) // In use state, you can determine a starting default value

  // The first value in the array destructuring is always the starting value
  // The second value allows you to update your state.
  function decrementCount(){
    setCount(prevCount => prevCount - 5)   // Set count is written as a function like so
  }
  function incrementCount(){
    setCount(prevCount => prevCount + 5) 
  }
  return (
    <div className="counter-container">
      <button onClick={decrementCount}> - </button>
      <span id="count-box">{count}</span>
      <button onClick={incrementCount}> + </button>
    </div>
  )
}


