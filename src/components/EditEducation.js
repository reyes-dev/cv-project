import React, { Component } from "react";

const EditEducation = ({
  schoolName,
  studyTitle,
  studyDate,
  setSchoolName,
  setStudyTitle,
  setStudyDate,
}) => {
  return (
    <div>
      <label>School Name:</label>
      <input
        name="schoolName"
        onChange={(e) => setSchoolName(e.target.value)}
        value={schoolName}
      ></input>
      <label>Title of Study:</label>
      <input
        name="studyTitle"
        onChange={(e) => setStudyTitle(e.target.value)}
        value={studyTitle}
      ></input>
      <label>Date of Study:</label>
      <input
        name="studyDate"
        onChange={(e) => setStudyDate(e.target.value)}
        value={studyDate}
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
