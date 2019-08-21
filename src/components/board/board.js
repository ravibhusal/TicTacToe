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
      //if (!this.state.board[i]) this.state.board[i] = [];
      if (
        this.state.board[i][0] === this.state.board[i][1] &&
        this.state.board[i][1] === this.state.board[i][2] &&
        this.state.board[i][0] !== ""
      ) {
        console.log(this.state.board[i][0]);
        console.log("Rows Crossed");
      } else {
        console.log("Not crossed");
      }
    }
  }

  columnCrossed() {
    for (var i = 0; i < 3; i++) {
      if (!this.state.board[0]) this.state.board[0] = [];
      if (!this.state.board[1]) this.state.board[1] = [];
      if (!this.state.board[2]) this.state.board[2] = [];
      if (
        this.state.board[0][i] === this.state.board[1][i] &&
        this.state.board[1][i] === this.state.board[2][i] &&
        this.state.board[0][i] !== ""
      ) {
        console.log("Column Crossed");
      } else {
        console.log("Not crossed");
      }
    }
  }

  diagonalCrossed() {
    if (!this.state.board[0]) this.state.board[0] = [];
    if (!this.state.board[1]) this.state.board[1] = [];
    if (!this.state.board[2]) this.state.board[2] = [];
    if (
      (this.state.board[0][0] === this.state.board[1][1] &&
        this.state.board[2][2]) ||
      (this.state.board[0][2] === this.state.board[1][1] &&
        this.state.board[0][2] === this.state.board[2][0])
    ) {
      console.log("Diagonals Crossed");
    } else {
      console.log("Not crossed");
    }
  }

  componentDidUpdate() {
    /*   this.rowCrossed();
    this.columnCrossed();
    this.diagonalCrossed(); */
  }

  componentDidMount() {
    this.setState({ currentPlayer: this.state.player1 });
  }

  handleClick = (xPosition, yPosition, value) => {
    let arr = this.state.board.slice();
    if (this.state.gameOver !== true) {
      if (this.state.currentPlayer === this.state.player1) {
        if (!arr[xPosition]) arr[xPosition] = [];
        arr[xPosition][yPosition] = this.state.player1;
        console.log(
          this.state.currentPlayer + " moved to " + xPosition,
          yPosition + " in the board"
        );
        this.setState({
          board: arr,
          currentPlayer: this.state.player2
        });
      } else {
        if (!arr[xPosition]) arr[xPosition] = [];
        arr[xPosition][yPosition] = this.state.player2;
        console.log(
          this.state.currentPlayer + " moved to " + xPosition,
          yPosition + " in the board"
        );
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
    for (var i = 0; i < 3; i++) {
      if (!this.state.board[i]) this.state.board[i] = [];
    }
    return (
      <div>
        <div className="game-board">
          <Square
            xPosition="0"
            yPosition="0"
            value={this.state.board[0][0]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="0"
            yPosition="1"
            value={this.state.board[0][1]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="0"
            yPosition="2"
            value={this.state.board[0][2]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="1"
            yPosition="0"
            value={this.state.board[1][0]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="1"
            yPosition="1"
            value={this.state.board[1][1]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="1"
            yPosition="2"
            value={this.state.board[1][2]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="2"
            yPosition="0"
            value={this.state.board[2][0]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="2"
            yPosition="1"
            value={this.state.board[2][1]}
            onClick={this.handleClick.bind(this)}
          />
          <Square
            xPosition="2"
            yPosition="2"
            value={this.state.board[2][2]}
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
