import React, { Component } from "react";

class EditExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label>Company Name:</label>
        <input
          name="companyName"
          onChange={this.props.handleChange}
          value={this.props.companyName}
        ></input>
        <label>Position:</label>
        <input
          name="position"
          onChange={this.props.handleChange}
          value={this.props.position}
        ></input>
        <label>Main Tasks:</label>
        <input
          name="mainTasks"
          onChange={this.props.handleChange}
          value={this.props.mainTasks}
        ></input>
        <label>Start Date:</label>
        <input
          name="startDate"
          onChange={this.props.handleChange}
          value={this.props.startDate}
        ></input>
        <label>End Date:</label>
        <input
          name="endDate"
          onChange={this.props.handleChange}
          value={this.props.endDate}
        ></input>
      </div>
    );
  }
}

export default EditExperience;
