import React from "react";
import Bound_box from "./Bound_box";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Bound_box
          path="/img/point.png"
          rebouncity={1}
          acceleration_x={0}
          acceleration_y={0.1}
          initial_velocity_x={2}
          initial_velocity_y={1}
          initial_coordinate_x={0}
          initial_coordinate_y={0}
          height={200}
          width={100}
        />
      </div>
    );
  }
}
