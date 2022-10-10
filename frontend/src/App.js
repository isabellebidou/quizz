import "./styles/App.css";
import React from "react";
import QuestionBundle from "./components/questionbundle";
import Buttons from "./components/buttons";
import Result from "./components/result";
import Webimage from "./components/Webimage";

class App extends React.Component {
  state = {
    questions: [], //questions retreived from memory
    answeredQuestion: 0, //keeps track of the index of the question currently on display
    started: false, //keeps track if test already started
    finished: false, //keeps track if test already ended
    score: 0, //sum of the weights of aswered questions
    grade: 0,
    message: "", //portrait result for current test
    readyForNext: false, //true when one and only one checkbox is checked
  };
  // fetches the questions when the user clicks on start
  startTest = async () => {
    const data = await fetch("/data");
    const questions = await data.json();
    this.setState({ questions: questions });
    this.setState({ started: true });
  };
  // called when the user clicks on the next button
  toNextQuestion = async (index) => {
    //remove the next button
    this.setState({ readyForNext: false });
    this.setState({ answeredQuestion: index + 1 });
    const answer = this.checkedAnswer();
    if (answer.value === "correct") {
      //https://stackoverflow.com/questions/42364838/incrementing-state-value-by-one-using-react
      this.setState({score: this.state.score + 1}, () => {
    });
    } 
    
    if (this.state.answeredQuestion === this.state.questions.length - 1) {
      this.setState({ finished: true });
      const index = 100/this.state.questions.length;
      const grade = this.state.score * index;
      this.setState({ grade: grade}); 
      const messageData = await fetch("/results/:" + grade);
      const messageJson = await messageData.json();
      this.setState({ message: messageJson });
    }
  };

  //once all the questions are answered the result message is selected according to the score
  getMessage = async () => {
   // var index = Math.floor(this.state.grade / this.state.messages.length);
    const messageData = await fetch("/results/:" + this.state.grade);
    const messageJson = await messageData.json();
    this.setState({ message: messageJson });
  };
  //returns number of checked answers in question on display
  checkedNumber = () => {
    const checked = [];
    var checkboxes = document.getElementsByClassName("answer-checkbox");
    for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index];
      if (checkbox.checked) checked.push(checkbox);
    }
    return checked.length;
  };
  checkedAnswer = () => {
    var radios = document.getElementsByClassName("answer-checkbox");
    for (let index = 0; index < radios.length; index++) {
      const radio = radios[index];
      if (radio.checked) return radio;
    }
    return null;
  };

  // called each time an answer is selected
  onAnswerCheck = () => {
    this.setState({ readyForNext: this.checkedNumber() === 1 ? true : false });
  };

  render() {
    return (
      <div className="App">
        {this.state.questions.length > 0 && !this.state.finished && (
          <QuestionBundle
            question={this.state.questions[this.state.answeredQuestion]}
            onAnswerCheck={this.onAnswerCheck}
          />
        )}
        {this.state.finished && (
          <div className="App">
            <Result message={this.state.message} score={this.state.grade} />
          </div>
        )}
        {!this.state.started && <Webimage />}
        {!this.state.finished && (
          <Buttons
            onStart={this.startTest}
            onNext={this.toNextQuestion}
            started={this.state.started}
            checked={this.state.readyForNext}
            answeredQuestionIndex={this.state.answeredQuestion}
          />
        )}
      </div>
    );
  }
}

export default App;
//react frontend and node.js backend together
//https://www.youtube.com/watch?v=3isCTSUdXaQ
