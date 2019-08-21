import React from "react";
import "./styles.css";

class Square extends React.Component {
  state = {
    value: "",
    xPosition: "",
    yPosition: ""
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log(this.props.xPosition, this.props.yPosition, this.props.value);
    this.props.onClick(
      this.props.xPosition,
      this.props.yPosition,
      this.props.value
    );
  };

  render() {
    return (
      <div className="box" onClick={this.handleClick.bind(this)}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
