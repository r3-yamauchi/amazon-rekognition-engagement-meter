import React, { Component } from "react";
import { Button } from "react-bootstrap";

class RekognitionButton extends Component {
  constructor() {
    super();
    this.state = {
      started: false
    };
  }

  render() {
    return (
      <Button
        bsStyle={this.state.started ? "danger" : "success"}
        onClick={e => {
          this.setState({
            started: !this.state.started
          });
          this.props.onClick(e);
        }}
        disabled={!this.props.enabled}
      >
        {this.state.started ? "Stop" : "Start"} Rekognition
      </Button>
    );
  }
}

export default RekognitionButton;
