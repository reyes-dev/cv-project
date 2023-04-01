import React, { Component } from "react";

const EditExperience = ({
  companyName,
  position,
  mainTasks,
  startDate,
  endDate,
  setCompanyName,
  setPosition,
  setMainTasks,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div>
      <label>Company Name:</label>
      <input
        name="companyName"
        onChange={(e) => setCompanyName(e.target.value)}
        value={companyName}
      ></input>
      <label>Position:</label>
      <input
        name="position"
        onChange={(e) => setPosition(e.target.value)}
        value={position}
      ></input>
      <label>Main Tasks:</label>
      <input
        name="mainTasks"
        onChange={(e) => setMainTasks(e.target.value)}
        value={mainTasks}
      ></input>
      <label>Start Date:</label>
      <input
        name="startDate"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      ></input>
      <label>End Date:</label>
      <input
        name="endDate"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      ></input>
    </div>
  );
};

// class EditExperience extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <label>Company Name:</label>
//         <input
//           name="companyName"
//           onChange={this.props.handleChange}
//           value={this.props.companyName}
//         ></input>
//         <label>Position:</label>
//         <input
//           name="position"
//           onChange={this.props.handleChange}
//           value={this.props.position}
//         ></input>
//         <label>Main Tasks:</label>
//         <input
//           name="mainTasks"
//           onChange={this.props.handleChange}
//           value={this.props.mainTasks}
//         ></input>
//         <label>Start Date:</label>
//         <input
//           name="startDate"
//           onChange={this.props.handleChange}
//           value={this.props.startDate}
//         ></input>
//         <label>End Date:</label>
//         <input
//           name="endDate"
//           onChange={this.props.handleChange}
//           value={this.props.endDate}
//         ></input>
//       </div>
//     );
//   }
// }

export default EditExperience;
