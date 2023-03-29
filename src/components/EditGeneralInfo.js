import React, { Component } from "react";

class EditGeneralInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label>Name:</label>
        <input
          name="name"
          onChange={this.props.handleChange}
          value={this.props.name}
        ></input>
        <label>Email:</label>
        <input
          name="email"
          onChange={this.props.handleChange}
          value={this.props.email}
        ></input>
        <label>Phone Number:</label>
        <input
          name="phoneNumber"
          onChange={this.props.handleChange}
          value={this.props.phoneNumber}
        ></input>
      </div>
    );
  }
}

export default EditGeneralInfo;
