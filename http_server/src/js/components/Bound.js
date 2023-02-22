import React from "react";

export default class Bound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.path} />
      </div>
    );
  }
}
