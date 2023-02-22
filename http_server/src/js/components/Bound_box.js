import React from "react";
import Bound from "./Bound";

export default class Bound_box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ height: this.props.height, width: this.props.width }}>
          <Bound
            path={this.props.path}
            rebouncity={this.props.rebouncity}
            acceleration_x={this.props.acceleration_x}
            acceleration_y={this.props.acceleration_y}
            initial_velocity_x={this.props.initial_velocity_x}
            initial_velocity_y={this.props.initial_velocity_y}
            initial_coordinate_x={this.props.initial_coordinate_x}
            initial_coordinate_y={this.props.initial_coordinate_y}
            height={this.props.height}
            width={this.props.width}
          />
        </div>
      </div>
    );
  }
}
