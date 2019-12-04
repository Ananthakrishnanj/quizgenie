import React, { Component } from "react";
import Axios from "axios";
import "../styles/Game.css";
import Questions from "./questions";
import Loader from "./loader";
import { Redirect } from "react-router-dom";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: this.props.location.state.name,
      isLoading: true,
      timer: "",
      score: 0,
      totalScore: this.totalQuestions,
      gameCompleted: false
    };
  }

  sessionToken;
  questions;
  totalQuestions = 10;

  getSessionToken = async () => {
    await Axios.get("https://opentdb.com/api_token.php?command=request")
      .then(res => {
        this.sessionToken = res.data.token;
      })
      .catch(err => console.log(err));
  };

  getQuesions = async () => {
    let baseUrl =
      "https://opentdb.com/api.php?amount=" +
      this.totalQuestions +
      "&token=" +
      this.sessionToken;
    if (this.props.location.state.categoryId !== "any") {
      baseUrl =
        baseUrl + "&category=" + Number(this.props.location.state.categoryId);
    }

    await Axios.get(baseUrl).then(res => {
      this.questions = res.data.results;
    });
  };

  startTimer = () => {
    var timer = 300,
      minutes,
      seconds;
    setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.setState({ timer: minutes + ":" + seconds });

      if (--timer < 0) {
        this.changeGameStatus(true);
      }
    }, 1000);
  };

  updateScore = points => {
    this.setState({
      score: this.state.score + points
    });
  };

  changeGameStatus = status => {
    clearInterval(this.startTimer);
    this.setState({
      gameCompleted: status
    });
  };

  async componentDidMount() {
    await this.getSessionToken();
    await this.getQuesions();
    await this.startTimer();

    this.setState({
      isLoading: false
    });
  }

  render() {
    if (this.state.gameCompleted === true) {
      return (
        <Redirect
          to={{
            pathname: "/scorecard",
            state: {
              name: this.state.playerName,
              timer: this.state.timer,
              score: this.state.score,
              totalScore: this.state.totalScore,
              categoryId: this.props.location.state.categoryId
            }
          }}
        />
      );
    }
    return (
      <div>
        <div className="header">
          <div>
            <span class="glyphicon glyphicon-time timer"></span>
            <span className="timerText">{this.state.timer}</span>
          </div>
          <div className="header-name">Quiz Genie</div>
          <div className="header-name">{this.props.location.state.name}</div>
        </div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Questions
            questions={this.questions}
            updateScore={this.updateScore}
            changeGameStatus={this.changeGameStatus}
          />
        )}
      </div>
    );
  }
}

export default Game;
