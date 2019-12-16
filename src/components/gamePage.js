import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import "../styles/Game.css";
import Questions from "./questions";
import Loader from "./loader";
import { Redirect } from "react-router-dom";
import { changeGameStatus } from "../redux/gamestatus/gameStatusActions";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      timer: ""
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
    if (this.props.categoryId !== "any") {
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
        this.props.changeGameStatus(true);
        clearInterval(this.startTimer);
      }
    }, 1000);
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
    if (this.props.gameStatus === true) {
      return (
        <Redirect
          to={{
            pathname: "/scorecard",
            state: {
              timer: this.state.timer
            }
          }}
        />
      );
    }
    return (
      <div>
        <div className="header">
          <div>
            <span className="glyphicon glyphicon-time timer"></span>
            <span className="timerText">{this.state.timer}</span>
          </div>
          <div className="header-name">Quiz Genie</div>
          <div className="header-name">{this.props.name}</div>
        </div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Questions
            questions={this.questions}
            // updateScore={this.updateScore}
            // changeGameStatus={this.changeGameStatus}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.gameStatus.name,
    score: state.gameStatus.score,
    categoryId: state.gameStatus.categoryId,
    totalScore: state.gameStatus.totalScore,
    gameStatus: state.gameStatus.gameStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGameStatus: () => dispatch(changeGameStatus(true))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
