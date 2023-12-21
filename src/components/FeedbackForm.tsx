import { useState } from "react"

export default function FeedbackForm(){
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  return(
    <fieldset className="feedback">
      <h2>Feedback form</h2>
      <div className="field">
        <label htmlFor="score">Score: {score}⭐</label>
        <input 
         type="range"
         min="0" 
         max="10"
         value={score}
         onChange={e => setScore(e.target.value)}
        />
      </div>
      <hr/>
      <div className="field">
        <label htmlFor="">Comment:</label>
        <textarea name="comment" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">
        Submit
      </button>
    </fieldset>
  )
}