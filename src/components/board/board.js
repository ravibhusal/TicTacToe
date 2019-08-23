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
    emptyCell: null,

    board: [
      ["", ""],
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
    this.leftToRightDiagonalCrossed(this.state.currentPlayer);
    this.rightToLeftDiagnonalCrossed(this.state.currentPlayer);

    this.gameTied();
  }

  componentWillMount() {
    let arr = this.state.board.slice();

    while (arr.length < this.props.gridSize) {
      arr.push(["", ""]);
    }

    this.setState({
      board: arr
    });
  }
  componentDidMount() {
    this.setState({
      currentPlayer: this.state.player1,
      emptyCell: Math.pow(this.props.gridSize, 2)
    });
  }

  rowCrossed(currentPlayer) {
    var _currentPlayer = currentPlayer;
    var numberOfSameCells = 1;

    for (var i = 0; i < this.props.gridSize; i++) {
      for (var j = 0; j < this.props.gridSize; j++) {
        if (
          this.state.board[i][j] === this.state.board[i][j + 1] &&
          this.state.board[i][j] !== "" &&
          this.state.board[i][j] !== undefined
        ) {
          numberOfSameCells++;
          if (numberOfSameCells === this.props.gridSize) {
            if (this.state.gameOver !== true) {
              this.setState({
                gameOver: true,
                gameWon: true,
                winner: _currentPlayer
              });
            }
            break;
          } else {
            continue;
          }
        } else {
          numberOfSameCells = 1;
          break;
        }
      }
    }
  }

  columnCrossed(currentPlayer) {
    var _currentPlayer = currentPlayer;
    var numberOfSameCells = 1;

    for (var i = 0; i < this.props.gridSize; i++) {
      for (var j = 0; j < this.props.gridSize; j++) {
        if (
          this.state.board[j][i] === this.state.board[j + 1][i] &&
          j + 1 !== this.props.gridSize &&
          this.state.board[j][i] !== "" &&
          this.state.board[j][i] !== undefined
        ) {
          numberOfSameCells++;
          if (numberOfSameCells === this.props.gridSize) {
            if (this.state.gameOver !== true) {
              this.setState({
                gameOver: true,
                gameWon: true,
                winner: _currentPlayer
              });
            }
            break;
          } else {
            continue;
          }
        } else {
          numberOfSameCells = 1;
          break;
        }
      }
    }
  }

  leftToRightDiagonalCrossed(currentPlayer) {
    var _currentPlayer = currentPlayer;
    var numberOfSameCells = 1;
    for (var i = 0; i < this.props.gridSize; i++) {
      for (var j = 0; j < this.props.gridSize; j++) {
        if (i === j) {
          if (i + 1 !== this.props.gridSize && j + 1 !== this.props.gridSize) {
            if (
              this.state.board[i][j] === this.state.board[i + 1][j + 1] &&
              this.state.board[i][j] !== "" &&
              this.state.board[i][j] !== undefined
            ) {
              numberOfSameCells++;
              console.log(numberOfSameCells);
              if (numberOfSameCells === this.props.gridSize) {
                if (this.state.gameOver !== true) {
                  this.setState({
                    gameOver: true,
                    gameWon: true,
                    winner: _currentPlayer
                  });
                }
                break;
              } else {
                break;
              }
            } else {
              break;
            }
          }
        } else {
        }
      }
    }
  }
  rightToLeftDiagnonalCrossed(currentPlayer) {
    let _currentPlayer = currentPlayer;
    var numberOfSameCells = 1;
    for (var i = 0; i < this.props.gridSize; i++) {
      for (var j = this.props.gridSize - 1; j >= 0; j--) {
        console.log(i + 1, j - 1);
        if (i + j === this.props.gridSize - 1) {
          if (i + 1 < this.props.gridSize && j - 1 >= 0) {
            if (
              i + 1 !== this.props.gridSize &&
              this.state.board[i][j] === this.state.board[i + 1][j - 1] &&
              this.state.board[i][j] !== "" &&
              this.state.board[i][j] !== undefined
            ) {
              numberOfSameCells++;
              if (numberOfSameCells === this.props.gridSize) {
                if (this.state.gameOver !== true) {
                  this.setState({
                    gameOver: true,
                    gameWon: true,
                    winner: _currentPlayer
                  });
                }
                break;
              } else {
                break;
              }
            } else {
              break;
            }
          }
        } else {
        }
      }
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
    const squares = [];
    for (var i = 0; i < this.props.gridSize; i++) {
      for (var j = 0; j < this.props.gridSize; j++) {
        squares.push(
          <Square
            xPosition={i}
            yPosition={j}
            value={this.state.board[i][j]}
            onClick={this.handleClick}
          />
        );
      }
    }
    return (
      <div>
        <div
          className="game-board"
          style={{
            gridTemplate:
              "repeat(" +
              this.props.gridSize +
              ", 1fr) / repeat(" +
              this.props.gridSize +
              ", 1fr)"
          }}
        >
          {squares}
        </div>

        {this.renderLog()}
      </div>
    );
  }
}

export default Board;
