import { useState, useContext } from "react"
import { ThemeContext } from "../App";
import Form from "./Form";

export default function FeedbackForm(){
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const {theme} = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <-10) {
      alert("Please provide a comment explaining why the experience was poor.")
      return;
    }

    console.log("Form submitted!");
    setComment("");
    setScore("10");
  }
  return(
    <form onSubmit={handleSubmit}>
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
          <textarea 
            id={theme} 
            name="comment"
            cols={30 as number} 
            rows={10 as number}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </fieldset>
    </form>
  )
}