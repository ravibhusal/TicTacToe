import React from "react";
import "./styles.css";
import Square from "../square/square";

class Board extends React.Component {
  state = {
    player1: "X",
    player2: "O",
    currentPlayer: null,
    backgroundColor: "#fff",
    gameOver: false,
    gameWon: false,
    gameTied: false,
    player1Move: "",
    player2Move: "",
    board: []
  };

  rowCrossed() {
    for (var i = 0; i < 3; i++) {
      if (
        this.state.board[i][0] === this.state.board[i][1] &&
        this.state.board[i][1] === this.state.board[i][2] &&
        this.state.board[i][0] !== ""
      ) {
      }
    }
  }

  columnCrossed() {
    for (var i = 0; i < 3; i++) {
      if (
        this.state.board[0][i] === this.state.board[1][i] &&
        this.state.board[1][i] === this.state.board[2][i] &&
        this.state.board[0][i] !== ""
      ) {
      }
    }
  }

  diagonalCrossed() {
    if (
      (this.state.board[0][0] === this.state.board[1][1] &&
        this.state.board[2][2]) ||
      (this.state.board[0][2] === this.state.board[1][1] &&
        this.state.board[0][2] === this.state.board[2][0])
    ) {
    }
  }

  columnCrossed() {}

  diagonalCrossed() {}

  /*  componentDidUpdate() {
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
  } */

  componentDidMount() {
    this.setState({ currentPlayer: this.state.player1 });
  }

  handleClick = (xPosition, yPosition, value) => {
    console.log(xPosition);
    let arr = this.state.board.slice();
    console.log(arr);
    if (this.state.gameOver !== true) {
      if (this.state.currentPlayer === this.state.player1) {
        if (!arr[xPosition]) arr[xPosition] = [];
        arr[xPosition][yPosition] = this.state.player1;
        this.setState({
          board: arr,
          currentPlayer: this.state.player2
        });
      } else {
        if (!arr[xPosition]) arr[xPosition] = [];
        arr[xPosition][yPosition] = this.state.player2;
        this.setState({
          board: arr,
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
          <Square
            xPosition="0"
            yPosition="0"
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="0"
            yPosition="1"
            //  value={this.state.board[0][1]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="0"
            yPosition="2"
            //  value={this.state.board[0][2]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="1"
            yPosition="0"
            //  value={this.state.currentPlayer}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="1"
            yPosition="1"
            value={this.state.currentPlayer}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="1"
            yPosition="2"
            value={this.state.currentPlayer}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="2"
            yPosition="0"
            value={this.state.currentPlayer}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="2"
            yPosition="1"
            value={this.state.currentPlayer}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="2"
            yPosition="2"
            value={this.state.currentPlayer}
            onClick={this.handleClick.bind(this)}
          />
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
