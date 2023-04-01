import React, { Component } from "react";

const DisplayGeneralInfo = (props) => {
  return (
    <div className="info">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Phone Number: {props.phoneNumber}</p>
    </div>
  );
};

// class DisplayGeneralInfo extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="info">
//         <p>Name: {this.props.name}</p>
//         <p>Email: {this.props.email}</p>
//         <p>Phone Number: {this.props.phoneNumber}</p>
//       </div>
//     );
//   }
// }

export default DisplayGeneralInfo;
