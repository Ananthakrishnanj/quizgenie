import React, { Component } from 'react';
import '../styles//Scorecard.css';
import {Link} from 'react-router-dom';

class Scorecard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.rating = Math.round((this.props.location.state.score/this.props.location.state.totalScore)*5);
    }
    rating;

    showRating = () => {
            let stars = [];
            for(let i =1 ; i <= 5; i++) {
                if(this.rating >= i)
                    stars.push(<span class="fa fa-star checked"></span>);
                else
                    stars.push(<span class="fa fa-star"></span>);
            }
            console.log(stars)
        return stars;
    }
    render() { 
        return ( <div className="scoreCard">
        <div className="playerName">Name : {this.props.location.state.name}</div>
        <div className="score">Score : {this.props.location.state.score}/{this.props.location.state.totalScore}</div>    
        <div className="time">ETA : {this.props.location.state.timer}</div>
        <div className="stars">
            {this.showRating()}
        </div>
        <Link
        to="/"
      >
        <button className="startButton">Re-play Quiz</button>
      </Link>
        </div> );
    }
}
 
export default Scorecard;