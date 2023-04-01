import React, { Component } from "react";

const EditGeneralInfo = (props) => {
  return (
    <div>
      <label>Name:</label>
      <input
        name="name"
        onChange={(e) => props.setName(e.target.value)}
        value={props.name}
      ></input>
      <label>Email:</label>
      <input
        name="email"
        onChange={(e) => props.setEmail(e.target.value)}
        value={props.email}
      ></input>
      <label>Phone Number:</label>
      <input
        name="phoneNumber"
        onChange={(e) => props.setPhoneNumber(e.target.value)}
        value={props.phoneNumber}
      ></input>
    </div>
  );
};

// class EditGeneralInfo extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <label>Name:</label>
//         <input
//           name="name"
//           onChange={this.props.handleChange}
//           value={this.props.name}
//         ></input>
//         <label>Email:</label>
//         <input
//           name="email"
//           onChange={this.props.handleChange}
//           value={this.props.email}
//         ></input>
//         <label>Phone Number:</label>
//         <input
//           name="phoneNumber"
//           onChange={this.props.handleChange}
//           value={this.props.phoneNumber}
//         ></input>
//       </div>
//     );
//   }
// }

export default EditGeneralInfo;
