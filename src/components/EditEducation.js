import React, { Component } from "react";

const EditEducation = (props) => {
  return (
    <div>
      <label>School Name:</label>
      <input
        name="schoolName"
        onChange={(e) => props.setSchoolName(e.target.value)}
        value={props.schoolName}
      ></input>
      <label>Title of Study:</label>
      <input
        name="studyTitle"
        onChange={(e) => props.setStudyTitle(e.target.value)}
        value={props.studyTitle}
      ></input>
      <label>Date of Study:</label>
      <input
        name="studyDate"
        onChange={(e) => props.setStudyDate(e.target.value)}
        value={props.studyDate}
      ></input>
    </div>
  );
};

// class EditEducation extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <label>School Name:</label>
//         <input
//           name="schoolName"
//           onChange={this.props.handleChange}
//           value={this.props.schoolName}
//         ></input>
//         <label>Title of Study:</label>
//         <input
//           name="studyTitle"
//           onChange={this.props.handleChange}
//           value={this.props.studyTitle}
//         ></input>
//         <label>Date of Study:</label>
//         <input
//           name="studyDate"
//           onChange={this.props.handleChange}
//           value={this.props.studyDate}
//         ></input>
//       </div>
//     );
//   }
// }

export default EditEducation;
