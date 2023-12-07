

import { useContext } from 'react'
import { ThemeContext } from '../App'

interface ModeTogglerProps {
  toggleTheme : () => void;
}

const ModeToggler: React.FC<ModeTogglerProps> = ({ toggleTheme }: ModeTogglerProps) => {
    const theme = useContext(ThemeContext)
    const darkModeText = <p>Dark Mode is On</p>
    const lightModeText = <p>Light Mode is On</p>

    function handleClick(): void {
       toggleTheme();
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
export default ModeToggler;