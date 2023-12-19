export default function Form(){
  return(
    <form>
      <fieldset>
        <div className="field">
          <label>Name:</label>
          <input type="text" placeholder="Name" name="name"/>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  )
}