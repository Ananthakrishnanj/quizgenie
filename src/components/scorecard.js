import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles//Scorecard.css";
import { Link } from "react-router-dom";
import { playAudio } from "../utils/audio";

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.rating = Math.round((this.props.score / this.props.totalScore) * 5);
  }
  rating;

  showRating = () => {
    playAudio("win");
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (this.rating >= i)
        stars.push(
          <span className="glowing-gold">
            <span className="fa fa-star checked animated rotateIn "></span>
          </span>
        );
      else stars.push(<span className="fa fa-star animated zoomIn"></span>);
    }
    console.log(stars);
    return stars;
  };
  render() {
    return (
      <div className="scoreCard">
        <div className="playerName">Name : {this.props.name}</div>
        <div className="score">
          Score : {this.props.score}/{this.props.totalScore}
        </div>
        <div className="time">ETA : {this.props.location.state.timer}</div>
        <div className="stars">{this.showRating()}</div>
        <Link
          to={{
            pathname: "/game"
          }}
        >
          <button className="startButton">Re-play Quiz</button>
        </Link>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Scorecard);
