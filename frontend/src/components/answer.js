import "../styles/Answer.css";
import React from "react";


const Answer = (props) => {
  const handleCheck = (event) => {
    props.onAnswerCheck();
  };

  return (
    <div className="answer-div">
      <input 
        className="answer-checkbox"
        type="radio"
        id={props.id}
        data-testid = {props.id}
        //https://stackoverflow.com/questions/44317663/uncheck-radio-buttons-in-react
        name={"radio"}
        value={props.result}
        onClick={(event) => {
          handleCheck(event);
        }}

      />
      <label className = "answer-label" htmlFor={props.answer}>{props.answer}</label>
    </div>
  );
};
export default Answer;

