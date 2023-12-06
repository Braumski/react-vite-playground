

import { useContext } from 'react'
import { ThemeContext } from '../App'


export default function ModeToggler() {
    const theme = useContext(ThemeContext)
    const darkModeText = <p>Dark Mode is On</p>
    const lightModeText = <p>Light Mode is On</p>

    function handleClick() {
        
    }


    return (
      <div className="mode-toggle-container">
        {theme === "dark" ? darkModeText : lightModeText}
        <button onClick = {handleClick}>
          Change mode
        </button>
      </div>
    )
   }
