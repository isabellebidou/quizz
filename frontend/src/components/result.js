import "../styles/Result.css";
import React from "react";
const Result = ({ score, message }) => {
    return (
      <div>
        <div className="content">
        <h1 className="score">result: {score} %</h1>
        <p className="message">
        {message.message}
        </p>
          
        </div>
      </div>
    );
  };
  
  export default Result;