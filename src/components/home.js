import React, { Component } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { playAudio } from "../utils/audio";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      categoryId: "any"
    };
  }

  changeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  changeCategoryId = e => {
    this.setState({
      categoryId: e.target.value
    });
  };

  startAudio = () => {
    playAudio("start");
  };

  categories = [
    {
      name: "Any Category",
      value: "any"
    },
    {
      name: "General Knowledge",
      value: "9"
    },
    {
      name: "Entertainment: Books",
      value: "10"
    },
    {
      name: "Entertainment: Film",
      value: "11"
    },
    {
      name: "Entertainment: Music",
      value: "12"
    },
    {
      name: "Entertainment: Musicals & Theatres",
      value: "13"
    },
    {
      name: "Entertainment: Television",
      value: "14"
    },
    {
      name: "Entertainment: Video Games",
      value: "15"
    },
    {
      name: "Entertainment: Board Games",
      value: "16"
    },
    {
      name: "Science & Nature",
      value: "17"
    },
    {
      name: "Science: Computers",
      value: "18"
    },
    {
      name: "Science: Mathematics",
      value: "19"
    },
    {
      name: "Mythology",
      value: "20"
    },
    {
      name: "Sports",
      value: "21"
    },
    {
      name: "Geography",
      value: "22"
    },
    {
      name: "History",
      value: "23"
    },
    {
      name: "Politics",
      value: "24"
    },
    {
      name: "Art",
      value: "25"
    },
    {
      name: "Celebrities",
      value: "26"
    },
    {
      name: "Animals",
      value: "27"
    },
    {
      name: "Vehicles",
      value: "28"
    },
    {
      name: "Entertainment: Comics",
      value: "29"
    },
    {
      name: "Science: Gadgets",
      value: "30"
    },
    {
      name: "Entertainment: Japanese Anime & Manga",
      value: "31"
    },
    {
      name: "Entertainment: Cartoon & Animations",
      value: "32"
    }
  ];

  render() {
    return (
      <div>
        <audio
          src="https://www.looperman.com/media/loops/3480777/looperman-l-3480777-0184512-percussion-arabic-saidi-style.mp3"
          autoPlay
          id="audio"
          loop
          controls
          hidden
        ></audio>
        <h1>Quiz Genie</h1>
        <form className="gameForm">
          <input
            type="text"
            placeholder="Enter your name"
            className="inputName"
            required
            value={this.state.name}
            onChange={this.changeName}
          ></input>
          <div className="select">
            <select className="categorySelect" onChange={this.changeCategoryId}>
              {this.categories.map(category => {
                return (
                  <option value={category.value} key={category.value}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <Link
            to={{
              pathname: "/game",
              state: {
                name: this.state.name,
                categoryId: this.state.categoryId
              }
            }}
          >
            <button
              className={this.state.name ? "startButton" : "enterName"}
              onClick={this.startAudio}
              disabled={!this.state.name}
              title={this.state.name ? "" : "Enter your name"}
            >
              Start Quiz
            </button>
          </Link>
        </form>
        <footer className="footer">
          Powered by Open Trivia DB<sup>&copy;</sup>
        </footer>
      </div>
    );
  }
}

export default Home;
