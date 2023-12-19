export default function Form(){
  return(
    <form>
      <fieldset id="name-fieldset">
        <div className="field">
          <label>Name:</label>
          <input type="text" placeholder="Name" name="name"/>
        </div>
        <button id="submit" type="submit">Submit</button>
      </fieldset>
    </form>
  )
}