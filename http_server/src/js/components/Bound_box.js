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
            height={this.props.height}
            width={this.props.width}
          />
        </div>
      </div>
    );
  }
}
