import React, { Component } from "react";

const DisplayExperience = (props) => {
  return (
    <div className="info">
      <p>Company Name: {props.companyName}</p>
      <p>Position: {props.position}</p>
      <p>Main Tasks: {props.mainTasks}</p>
      <p>Start Date: {props.startDate}</p>
      <p>End Date: {props.endDate}</p>
    </div>
  );
};

// class DisplayExperience extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="info">
//         <p>Company Name: {this.props.companyName}</p>
//         <p>Position: {this.props.position}</p>
//         <p>Main Tasks: {this.props.mainTasks}</p>
//         <p>Start Date: {this.props.startDate}</p>
//         <p>End Date: {this.props.endDate}</p>
//       </div>
//     );
//   }
// }

export default DisplayExperience;
