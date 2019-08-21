import React from "react";
import "./styles.css";

class Board extends React.Component {
  state = {
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
    eighth: "",
    ninth: "",
    player1: "X",
    player2: "O",
    currentPlayer: null,

    backgroundColor: "#fff",
    gameOver: false
  };

  componentDidUpdate() {
    if (
      this.state.first === this.state.second &&
      this.state.first === this.state.third &&
      this.state.first !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("first").style.backgroundColor = "#00FA9A";
      document.getElementById("second").style.backgroundColor = "#00FA9A";
      document.getElementById("third").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.first === this.state.fifth &&
      this.state.first === this.state.ninth &&
      this.state.first !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("first").style.backgroundColor = "#00FA9A";
      document.getElementById("fifth").style.backgroundColor = "#00FA9A";
      document.getElementById("ninth").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.first === this.state.fourth &&
      this.state.first === this.state.seventh &&
      this.state.first !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("first").style.backgroundColor = "#00FA9A";
      document.getElementById("fourth").style.backgroundColor = "#00FA9A";
      document.getElementById("seventh").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.fourth === this.state.fifth &&
      this.state.fourth === this.state.sixth &&
      this.state.fourth !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("fourth").style.backgroundColor = "#00FA9A";
      document.getElementById("fifth").style.backgroundColor = "#00FA9A";
      document.getElementById("sixth").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.seventh === this.state.eighth &&
      this.state.seventh === this.state.ninth &&
      this.state.seventh !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("seventh").style.backgroundColor = "#00FA9A";
      document.getElementById("eighth").style.backgroundColor = "#00FA9A";
      document.getElementById("ninth").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.second === this.state.fifth &&
      this.state.second === this.state.eighth &&
      this.state.second !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("fifth").style.backgroundColor = "#00FA9A";
      document.getElementById("second").style.backgroundColor = "#00FA9A";
      document.getElementById("eighth").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.third === this.state.sixth &&
      this.state.third === this.state.ninth &&
      this.state.third !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("third").style.backgroundColor = "#00FA9A";
      document.getElementById("sixth").style.backgroundColor = "#00FA9A";
      document.getElementById("ninth").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.third === this.state.fifth &&
      this.state.third === this.state.seventh &&
      this.state.third !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
      document.getElementById("third").style.backgroundColor = "#00FA9A";
      document.getElementById("fifth").style.backgroundColor = "#00FA9A";
      document.getElementById("seventh").style.backgroundColor = "#00FA9A";
    } else if (
      this.state.first !== "" &&
      this.state.second !== "" &&
      this.state.third !== "" &&
      this.state.fourth !== "" &&
      this.state.fifth !== "" &&
      this.state.sixth !== "" &&
      this.state.seventh !== "" &&
      this.state.eighth !== "" &&
      this.state.ninth !== ""
    ) {
      if (this.state.gameOver !== true) {
        this.setState({ gameOver: true });
      }
    }
  }

  componentDidMount() {
    this.setState({ currentPlayer: this.state.player1 });
  }

  handleClick = event => {
    if (this.state.gameOver !== true) {
      if (this.state.currentPlayer === this.state.player1) {
        this.setState({
          [event.target.id]: this.state.player1,
          currentPlayer: this.state.player2
        });
      } else {
        this.setState({
          [event.target.id]: this.state.player2,
          currentPlayer: this.state.player1
        });
      }
    }
  };

  handlePlayAgain = () => {
    window.location.reload();
  };
  render() {
    return (
      <div>
        <div className="game-board">
          <div
            className="box"
            id="first"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.first}
          </div>
          <div
            className="box"
            id="second"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.second}
          </div>
          <div
            className="box"
            id="third"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.third}
          </div>
          <div
            className="box"
            id="fourth"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.fourth}
          </div>
          <div
            className="box"
            id="fifth"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.fifth}
          </div>
          <div
            className="box"
            id="sixth"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.sixth}
          </div>
          <div
            className="box"
            id="seventh"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.seventh}
          </div>
          <div
            className="box"
            id="eighth"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.eighth}
          </div>
          <div
            className="box"
            id="ninth"
            style={{ backgroundColor: this.state.backgroundColor }}
            onClick={this.handleClick}
          >
            {this.state.ninth}
          </div>
        </div>

        {!this.state.gameOver ? (
          <h2>{this.state.currentPlayer}'s turn</h2>
        ) : (
          <div>
            <button onClick={this.handlePlayAgain}>Play Again!</button>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
