import React, { Component, useState } from "react";
import DisplayGeneralInfo from "./components/DisplayGeneralInfo";
import DisplayEducation from "./components/DisplayEducation";
import DisplayExperience from "./components/DisplayExperience";
import EditGeneralInfo from "./components/EditGeneralInfo";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";
import "./styles/style.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inEditMode, setInEditMode] = useState(true);

  const onClickSubmit = (e) => {
    e.preventDefault();
    setInEditMode(false);
  };
  const onClickEdit = (e) => {
    e.preventDefault();
    setInEditMode(true);
  };

  return (
    <div>
      <h1>CV APP</h1>
      <form>
        {inEditMode ? (
          <div>
            <EditGeneralInfo
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              setName={setName}
              setEmail={setEmail}
              setPhoneNumber={setPhoneNumber}
            />
            <EditEducation
              schoolName={schoolName}
              studyTitle={studyTitle}
              studyDate={studyDate}
              setSchoolName={setSchoolName}
              setStudyTitle={setStudyTitle}
              setStudyDate={setStudyDate}
            />
            <EditExperience
              companyName={companyName}
              position={position}
              mainTasks={mainTasks}
              startDate={startDate}
              endDate={endDate}
              setCompanyName={setCompanyName}
              setPosition={setPosition}
              setMainTasks={setMainTasks}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        ) : (
          <div>
            <DisplayGeneralInfo
              name={name}
              email={email}
              phoneNumber={phoneNumber}
            />
            <DisplayEducation
              schoolName={schoolName}
              studyTitle={studyTitle}
              studyDate={studyDate}
            />
            <DisplayExperience
              companyName={companyName}
              position={position}
              mainTasks={mainTasks}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        )}

        {inEditMode ? (
          <button onClick={onClickSubmit}>Submit</button>
        ) : (
          <button onClick={onClickEdit}>Edit</button>
        )}
      </form>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: "",
//       email: "",
//       phoneNumber: "",
//       schoolName: "",
//       studyTitle: "",
//       studyDate: "",
//       companyName: "",
//       position: "",
//       mainTasks: "",
//       startDate: "",
//       endDate: "",
//       inEditMode: true,
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   onClickSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       inEditMode: false,
//     });
//   };
//   onClickEdit = (e) => {
//     e.preventDefault();
//     this.setState({
//       inEditMode: true,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>CV APP</h1>
//         <form>
//           {this.state.inEditMode ? (
//             <div>
//               <EditGeneralInfo
//                 handleChange={this.handleChange}
//                 name={this.state.name}
//                 email={this.state.email}
//                 phoneNumber={this.state.phoneNumber}
//               />
//               <EditEducation
//                 handleChange={this.handleChange}
//                 schoolName={this.state.schoolName}
//                 studyTitle={this.state.studyTitle}
//                 studyDate={this.state.studyDate}
//               />
//               <EditExperience
//                 handleChange={this.handleChange}
//                 companyName={this.state.companyName}
//                 position={this.state.position}
//                 mainTasks={this.state.mainTasks}
//                 startDate={this.state.startDate}
//                 endDate={this.state.endDate}
//               />
//             </div>
//           ) : (
//             <div>
//               <DisplayGeneralInfo
//                 name={this.state.name}
//                 email={this.state.email}
//                 phoneNumber={this.state.phoneNumber}
//               />
//               <DisplayEducation
//                 schoolName={this.state.schoolName}
//                 studyTitle={this.state.studyTitle}
//                 studyDate={this.state.studyDate}
//               />
//               <DisplayExperience
//                 companyName={this.state.companyName}
//                 position={this.state.position}
//                 mainTasks={this.state.mainTasks}
//                 startDate={this.state.startDate}
//                 endDate={this.state.endDate}
//               />
//             </div>
//           )}
//           {this.state.inEditMode ? (
//             <button onClick={this.onClickSubmit}>Submit</button>
//           ) : (
//             <button onClick={this.onClickEdit}>Edit</button>
//           )}
//         </form>
//       </div>
//     );
//   }
// }

export default App;
