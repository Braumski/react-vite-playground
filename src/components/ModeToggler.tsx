
export default function ModeToggler(props) {
    const darkMode = <p>Dark Mode is On</p>
    const lightMode = <p>Light Mode is On</p>

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
        {props.isDark ? darkMode : lightMode}
        <button onClick = {handleClick}>
          Change mode
        </button>
      </div>
    )
}
