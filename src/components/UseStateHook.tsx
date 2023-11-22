import React, { useState } from 'react'  // Import useState from react

export default function Counter (){

  const [count, setCount] = useState(4)
  // The first value in the array destructuring is always the starting value
  // The second value allows you to update your state.
  function decrementCount(){
    setCount(count-1)   // Set count is written as a function like so
  }
  function incrementCount(){
    setCount(count+1)
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}