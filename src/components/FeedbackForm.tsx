import { useState } from "react"

export default function FeedbackForm(){
  const [score, setScore] = useState("10");

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
      <button type="submit">
        Submit
      </button>
    </fieldset>
  )
}