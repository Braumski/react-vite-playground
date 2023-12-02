import { useState } from 'react'
  // Event Handling

export default function ModeToggler() {

    const [isDark, setIsDark] = useState(true)
    const darkMode = <p>Dark Mode is On</p>
    const lightMode = <p>Light Mode is On</p>

    function handleClick() {
      setIsDark(!isDark);
      if (isDark === true) {
        console.log("Dark mode is on");
      } else {
        console.log("Light mode is on");
      }
    }

    return (
      <div className="mode-toggle-container">
        {isDark ? darkMode : lightMode}
        <button onClick = {handleClick}>
          Change mode
        </button>
      </div>
    )
}