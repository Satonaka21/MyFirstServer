import React from "react";
import Bound_box from "./Bound_box";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Bound_box
          path="/img/point.png"
          width={100}
          height={100}
          rebouncity={1}
        />
      </div>
    );
  }
}
