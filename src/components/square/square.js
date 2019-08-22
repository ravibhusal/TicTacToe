import React from "react";
import "./styles.css";

class Square extends React.Component {
  state = {
    value: "",
    xPosition: "",
    yPosition: "",
    clicked: false,
    backgroundColor: "#fff"
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.xPosition === newProps.winnerSquare1[0][0] &&
      this.props.yPosition === newProps.winnerSquare1[0][1]
    ) {
      console.log("here");
      this.setState({ backgroundColor: "#32CD32" });
    } else if (
      this.props.xPosition === newProps.winnerSquare2[0][0] &&
      this.props.yPosition === newProps.winnerSquare2[0][1]
    ) {
      console.log("here");
      this.setState({ backgroundColor: "#32CD32" });
    } else if (
      this.props.xPosition === newProps.winnerSquare3[0][0] &&
      this.props.yPosition === newProps.winnerSquare3[0][1]
    ) {
      this.setState({ backgroundColor: "#32CD32" });
    } else {
    }
  }

  handleColorChange(x, y) {}
  handleClick = () => {
    this.props.onClick(
      this.props.xPosition,
      this.props.yPosition,
      this.props.value,
      this.state.clicked
    );

    this.setState({ clicked: true });
  };

  render() {
    return (
      <div
        className="box"
        id="box"
        style={{ backgroundColor: this.state.backgroundColor }}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Square;
