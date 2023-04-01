import React, { Component } from "react";

const DisplayEducation = ({ schoolName, studyTitle, studyDate }) => {
  return (
    <div className="info">
      <p>School Name: {schoolName}</p>
      <p>Title of Study: {studyTitle}</p>
      <p>Date of Study: {studyDate}</p>
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
