import React from "react";

export default class Bound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration_x: this.props.acceleration_x,
      acceleration_y: this.props.acceleration_y,
      velocity_x: this.props.initial_velocity_x,
      velocity_y: this.props.initial_velocity_y,
      coordinate_x: this.props.initial_coordinate_x,
      coordinate_y: this.props.initial_coordinate_y,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.set_coordinate(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  set_coordinate() {
    console.log(this.state.coordinate_x, this.state.coordinate_y);
    this.set_velocity();
    this.setState({
      coordinate_x: this.state.coordinate_x + this.state.velocity_x,
      coordinate_y: this.state.coordinate_y + this.state.velocity_y,
    });
  }

  set_velocity() {
    if (this.state.coordinate_y >= this.props.height) {
      this.setState({
        coordinate_y: this.props.height,
        velocity_y: this.state.velocity_y * this.props.rebouncity * -1,
      });
    }
    if (this.state.coordinate_y < 0) {
      this.setState({
        coordinate_y: 0,
        velocity_y: this.state.velocity_y * this.props.rebouncity * -1,
      });
    }

    if (this.state.coordinate_x >= this.props.width) {
      this.setState({
        coordinate_x: this.props.width,
        velocity_x: this.state.velocity_x * this.props.rebouncity * -1,
      });
    }
    if (this.state.coordinate_x < 0) {
      this.setState({
        coordinate_x: 0,
        velocity_x: this.state.velocity_x * this.props.rebouncity * -1,
      });
    }

    this.setState({
      velocity_x: this.state.velocity_x + this.state.acceleration_x,
      velocity_y: this.state.velocity_y + this.state.acceleration_y,
    });
  }

  render() {
    return (
      <div>
        <img
          src={this.props.path}
          style={{
            position: "relative",
            top: this.state.coordinate_y + "px",
            left: this.state.coordinate_x + "px",
          }}
        />
      </div>
    );
  }
}
