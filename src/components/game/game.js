import React from "react";

class Game extends React.Component {
  state = {};

  handleEnterClick = () => {
    var gridSize = document.getElementById("gridNumber").value;
    console.log(gridSize);
    this.props.callBackFromParent(gridSize);
  };

  render() {
    return (
      <div>
        <h2>Enter the number of rows and column</h2>
        <input id="gridNumber" />
        <button style={{ marginLeft: 20 }} onClick={this.handleEnterClick}>
          Enter
        </button>
      </div>
    );
  }
}

export default Game;
