import React from "react";
import "./App.css";
import Board from "./components/board/board";

class App extends React.Component {
  state = {
    gridSize: null
  };

  handleEnterClick = () => {
    var gridSize = document.getElementById("gridNumber").value;
    this.setState({ gridSize: parseInt(gridSize) });
  };

  render() {
    return (
      <div className="App">
        {this.state.gridSize === null ? (
          <div>
            <h2>Enter the number of rows and column</h2>
            <input id="gridNumber" />
            <button style={{ marginLeft: 20 }} onClick={this.handleEnterClick}>
              Enter
            </button>
          </div>
        ) : (
          <div>
            <h2>Tic Tac Toe</h2>
            <Board gridSize={this.state.gridSize} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
