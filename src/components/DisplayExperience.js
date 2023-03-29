import React, { Component } from "react";

class DisplayExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="info">
        <p>Company Name: {this.props.companyName}</p>
        <p>Position: {this.props.position}</p>
        <p>Main Tasks: {this.props.mainTasks}</p>
        <p>Start Date: {this.props.startDate}</p>
        <p>End Date: {this.props.endDate}</p>
      </div>
    );
  }
}

export default DisplayExperience;
