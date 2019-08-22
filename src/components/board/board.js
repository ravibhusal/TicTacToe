import React from "react";
import "./styles.css";
import Square from "../square/square";

class Board extends React.Component {
  state = {
    player1: "X",
    player2: "O",
    currentPlayer: null,
    winner: null,
    backgroundColor: "#fff",
    gameOver: false,
    gameWon: false,
    gameTied: false,
    moveText: "",
    emptyCell: 9,
    winnerSquare1: [[""], [""]],
    winnerSquare2: [[""], [""]],
    winnerSquare3: [[""], [""]],

    board: [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""]
    ]
  };

  componentDidUpdate() {
    this.rowCrossed(this.state.currentPlayer);
    this.columnCrossed(this.state.currentPlayer);
    this.diagonalCrossed(this.state.currentPlayer);
    this.gameTied();
  }

  componentDidMount() {
    this.setState({ currentPlayer: this.state.player1 });
  }

  rowCrossed(currentPlayer) {
    var _currentPlayer = currentPlayer;
    var arr1 = this.state.winnerSquare1.slice();
    var arr2 = this.state.winnerSquare2.slice();
    var arr3 = this.state.winnerSquare3.slice();

    for (var i = 0; i < 3; i++) {
      if (
        this.state.board[i][0] === this.state.board[i][1] &&
        this.state.board[i][1] === this.state.board[i][2] &&
        this.state.board[i][0] !== "" &&
        this.state.board[0][i] !== undefined
      ) {
        arr1[0][0] = i.toString();
        arr1[0][1] = "0";
        arr2[0][0] = i.toString();
        arr2[0][1] = "1";
        arr3[0][0] = i.toString();
        arr3[0][1] = "2";
        if (this.state.gameOver !== true) {
          this.setState({
            gameOver: true,
            gameWon: true,
            winner: _currentPlayer,
            winnerSquare1: arr1,
            winnerSquare2: arr2,
            winnerSquare3: arr3
          });
        }
      } else {
      }
    }
  }

  columnCrossed(currentPlayer) {
    var _currentPlayer = currentPlayer;

    var arr1 = this.state.winnerSquare1.slice();
    var arr2 = this.state.winnerSquare2.slice();
    var arr3 = this.state.winnerSquare3.slice();

    for (var i = 0; i < 3; i++) {
      if (
        this.state.board[0][i] === this.state.board[1][i] &&
        this.state.board[1][i] === this.state.board[2][i] &&
        this.state.board[0][i] !== "" &&
        this.state.board[0][i] !== undefined
      ) {
        arr1[0][0] = "0";
        arr1[0][1] = i.toString();
        arr2[0][0] = "1";
        arr2[0][1] = i.toString();
        arr3[0][0] = "2";
        arr3[0][1] = i.toString();
        if (this.state.gameOver !== true) {
          this.setState({
            gameOver: true,
            gameWon: true,
            winner: _currentPlayer,
            winnerSquare1: arr1,
            winnerSquare2: arr2,
            winnerSquare3: arr3
          });
        }
      } else {
      }
    }
  }

  diagonalCrossed(currentPlayer) {
    var _currentPlayer = currentPlayer;
    var arr1 = this.state.winnerSquare1.slice();
    var arr2 = this.state.winnerSquare2.slice();
    var arr3 = this.state.winnerSquare3.slice();

    if (
      this.state.board[0][0] === this.state.board[1][1] &&
      this.state.board[0][0] === this.state.board[2][2] &&
      this.state.board[0][0] !== "" &&
      this.state.board[0][0] !== undefined
    ) {
      arr1[0][0] = "0";
      arr1[0][1] = "0";
      arr2[0][0] = "1";
      arr2[0][1] = "1";
      arr3[0][0] = "2";
      arr3[0][1] = "2";
      if (this.state.gameOver !== true) {
        this.setState({
          gameOver: true,
          gameWon: true,
          winner: _currentPlayer,
          winnerSquare1: arr1,
          winnerSquare2: arr2,
          winnerSquare3: arr3
        });
      }
    } else if (
      this.state.board[0][2] === this.state.board[1][1] &&
      this.state.board[1][1] === this.state.board[2][0] &&
      this.state.board[0][2] !== "" &&
      this.state.board[0][2] !== undefined
    ) {
      if (this.state.gameOver !== true) {
        this.setState({
          gameOver: true,
          gameWon: true,
          winner: _currentPlayer
        });
      }
    } else {
    }
  }

  gameTied() {
    if (
      this.state.gameOver !== true &&
      this.state.gameWon !== true &&
      this.state.gameTied !== true
    ) {
      if (this.state.emptyCell === 0) {
        this.setState({ gameTied: true, gameOver: true }, () => {
          console.log("Game is tied");
        });
      }
    }
  }

  handleClick = (xPosition, yPosition, value, clicked) => {
    let arr = this.state.board.slice();
    if (this.state.gameOver !== true) {
      if (clicked === false) {
        if (this.state.currentPlayer === this.state.player1) {
          arr[xPosition][yPosition] = this.state.player1;
          this.setState({
            moveText:
              this.state.currentPlayer +
              " moved to " +
              xPosition +
              "," +
              yPosition +
              " in the board"
          });

          this.setState(
            {
              board: arr,
              emptyCell: this.state.emptyCell - 1
            },
            () => {
              this.setState({ currentPlayer: this.state.player2 });
            }
          );
        } else {
          arr[xPosition][yPosition] = this.state.player2;
          this.setState({
            moveText:
              this.state.currentPlayer +
              " moved to " +
              xPosition +
              "," +
              yPosition +
              " in the board"
          });

          this.setState(
            {
              board: arr,
              emptyCell: this.state.emptyCell - 1
            },
            () => {
              this.setState({ currentPlayer: this.state.player1 });
            }
          );
        }
      } else {
        console.log("already clicked");
      }
    } else {
    }
  };

  handlePlayAgain = () => {
    window.location.reload();
  };

  renderLog() {
    if (!this.state.gameOver) {
      return (
        <div>
          <h2>{this.state.moveText}</h2>
          <h2>{this.state.currentPlayer}'s turn</h2>
        </div>
      );
    } else {
      if (this.state.gameWon) {
        return (
          <div>
            <h2>{this.state.winner} is the winner</h2>{" "}
            <button onClick={this.handlePlayAgain}>Play Again!</button>
          </div>
        );
      } else if (this.state.gameTied) {
        return (
          <div>
            <h2>Game is a tie</h2>{" "}
            <button onClick={this.handlePlayAgain}>Play Again!</button>
          </div>
        );
      }
    }
  }
  render() {
    return (
      <div>
        <div className="game-board">
          <Square
            xPosition="0"
            yPosition="0"
            value={this.state.board[0][0]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="0"
            yPosition="1"
            value={this.state.board[0][1]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="0"
            yPosition="2"
            value={this.state.board[0][2]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="1"
            yPosition="0"
            value={this.state.board[1][0]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="1"
            yPosition="1"
            value={this.state.board[1][1]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="1"
            yPosition="2"
            value={this.state.board[1][2]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="2"
            yPosition="0"
            value={this.state.board[2][0]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="2"
            yPosition="1"
            value={this.state.board[2][1]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
          <Square
            xPosition="2"
            yPosition="2"
            value={this.state.board[2][2]}
            onClick={this.handleClick.bind(this)}
            winnerSquare1={this.state.winnerSquare1}
            winnerSquare2={this.state.winnerSquare2}
            winnerSquare3={this.state.winnerSquare3}
          />
        </div>

        {this.renderLog()}
      </div>
    );
  }
}

export default Board;
