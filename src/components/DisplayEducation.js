import React, { Component } from "react";

const DisplayEducation = ({ props }) => {
  return (
    <div className="info">
      <p>School Name: {props.schoolName}</p>
      <p>Title of Study: {props.studyTitle}</p>
      <p>Date of Study: {props.studyDate}</p>
    </div>
  );
};

// class DisplayEducation extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="info">
//         <p>School Name: {this.props.schoolName}</p>
//         <p>Title of Study: {this.props.studyTitle}</p>
//         <p>Date of Study: {this.props.studyDate}</p>
//       </div>
//     );
//   }
// }

export default DisplayEducation;
