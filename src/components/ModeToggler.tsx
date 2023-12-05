import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function ModeToggler() {
    const darkTheme = useContext(ThemeContext)
    const darkModeText = <p>Dark Mode is On</p>
    const lightModeText = <p>Light Mode is On</p>

    function handleClick() {
      props.setIsDark(!props.isDark)
      if (props.isDark === true) {
        console.log("Dark mode is on");
      } else{
        console.log("Light mode is on");
      }
    }

    return (
      <div className="mode-toggle-container">
        {props.isDark ? darkModeText : lightModeText}
        <button onClick = {handleClick}>
          Change mode
        </button>
      </div>
    )
}
