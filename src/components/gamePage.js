import React, { Component } from "react";
import Axios from "axios";
import "../styles/Game.css";
import Questions from "./questions";
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      isLoading: true,
      timer: ""
    };
  }

  sessionToken;
  questions;

  getSessionToken = async () => {
    await Axios.get("https://opentdb.com/api_token.php?command=request")
      .then(res => {
        this.sessionToken = res.data.token;
      })
      .catch(err => console.log(err));
  };

  getQuesions = async () => {
    let baseUrl =
      "https://opentdb.com/api.php?amount=10&token=" + this.sessionToken;
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
        timer = 300;
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
    return (
      <div>
        <div className="header">
          <div>{this.state.timer}</div>
          <div className="header-name">{this.props.location.state.name}</div>
        </div>
        {this.state.isLoading ? (
          <p>loading</p>
        ) : (
          <Questions questions={this.questions} />
        )}
      </div>
    );
  }
}

export default Game;
