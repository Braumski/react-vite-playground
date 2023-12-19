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
      <fieldset id="name-fieldset">
        <div className="field">
          <label>Name:</label>
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            value={name} 
            onChange={(e=> setName(e.target.value))}
          />
        </div>
        <button
          id="submit"
          type="submit"
          disabled={!name}
          style={{
            backgroundColor: name ? 'var(--primary-color)': 'rgba(var(--primary-color), 0.9)',
            color: name ? 'var(--primary-light)' : 'var(--secondary-light)'
          }} //Does not allow submission if there is no input
        >Submit
        </button>
      </fieldset>
    </form>
  )
}