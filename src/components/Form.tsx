import { useState, useContext } from "react"
import { ThemeContext } from "../App"

export default function Form(){
  const [name, setName] = useState("")
  const {theme} = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault() //Stops page refresh
    setName("") // Clears the input box
    console.log("Form Submitted!")
  }

  return(
    <form onSubmit={handleSubmit}>
      <fieldset className="name-fieldset">
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input 
            id={theme}
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          id="submit"
          type="submit"
          disabled={!name} //Does not allow submission if there is no input in name field
          style={{
            opacity: name ? '1': '0.5' // style change if theres no name field input
          }} 
        >Submit
        </button>
      </fieldset>
    </form>
  )
}