import { useState, useContext } from "react"
import { ThemeContext } from "../App";

export default function FeedbackForm(){
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const {theme, toggleTheme} = useContext(ThemeContext);

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

      <div className="field">
        <label htmlFor="">Comment:</label>
        <textarea id={theme} name="comment" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">
        Submit
      </button>
    </fieldset>
  )
}