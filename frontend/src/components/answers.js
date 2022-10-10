import Answer from "./answer.js";


export default function Answers({ answers ,onAnswerCheck}) {
  const answerElements = answers.map((answer) => {
    return (
      <Answer
        answer={answer}
        //https://stackoverflow.com/a/43892905/1731667 unique id
        key = {answer.id}
        onAnswerCheck = {onAnswerCheck}
        {...answer}
      />
    );
  });

  return (
    <div className="answers-div">
      {answerElements}
    </div>
  );
}
