import { useState } from 'react'
  // Event Handling

export default function ModeToggler() {

    const [isDark, setIsDark] = useState(true)
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick() {
      setIsDark(!isDark);
      if (isDark === true) {
        console.log("Dark mode is on");
      } else {
        console.log("Light mode is on");
      }
      console.log(isDark);
    }

    return (
      <div>
        {isDark ? darkMode : lightMode}
        <button onClick = {handleClick}>
          Change mode
        </button>
      </div>
    )
}