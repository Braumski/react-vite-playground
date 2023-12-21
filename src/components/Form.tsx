import { useState } from "react"

export default function Form(){
  const [name, setName] = useState("")

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
            id="name"
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