export default function FeedbackForm(){
  return(
    <fieldset>
      <h2>Feedback form</h2>
      <div className="Field">
        <label htmlFor="score">Score</label>
        <input type="range" min="0" max="10" />
      </div>
      <button type="submit">
        Submit
      </button>
    </fieldset>
  )
}