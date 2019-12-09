import React, { Component } from "react";
import "../styles/Questioncard.css";
import { playAudio } from "../utils/audio";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.questions[0],
      options: this.shuffle([
        this.props.questions[0].correct_answer,
        ...this.props.questions[0].incorrect_answers
      ])
    };
  }

  questionIndex = 0;

  shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  nextQuestion = () => {
    ++this.questionIndex;
    this.setState({
      question: this.props.questions[this.questionIndex],
      options: this.shuffle([
        this.props.questions[this.questionIndex].correct_answer,
        ...this.props.questions[this.questionIndex].incorrect_answers
      ])
    });
  };

  submitAnswer = e => {
    if (this.questionIndex < this.props.questions.length - 1) {
      if (e.target.textContent === this.state.question.correct_answer) {
        playAudio("correct");
        this.props.updateScore(1);
      } else {
        playAudio("wrong");
      }
      this.nextQuestion();
    } else {
      this.props.changeGameStatus(true);
    }
  };

  render() {
    return (
      <div className="questionCard">
        <div className="question">{this.state.question.question}</div>
        <div className="optionContainer">
          {this.state.options.map((option, index) => {
            return (
              <button key={index} onClick={this.submitAnswer.bind(this)}>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Questions;
