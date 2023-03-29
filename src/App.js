import React, { Component } from "react";
import DisplayGeneralInfo from "./components/DisplayGeneralInfo";
import DisplayEducation from "./components/DisplayEducation";
import DisplayExperience from "./components/DisplayExperience";
import EditGeneralInfo from "./components/EditGeneralInfo";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";
import "./styles/style.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      studyTitle: "",
      studyDate: "",
      companyName: "",
      position: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
      inEditMode: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onClickSubmit = (e) => {
    e.preventDefault();
    this.setState({
      inEditMode: false,
    });
  };
  onClickEdit = (e) => {
    e.preventDefault();
    this.setState({
      inEditMode: true,
    });
  };

  render() {
    return (
      <div>
        <h1>CV APP</h1>
        <form>
          {this.state.inEditMode ? (
            <div>
              <EditGeneralInfo
                handleChange={this.handleChange}
                name={this.state.name}
                email={this.state.email}
                phoneNumber={this.state.phoneNumber}
              />
              <EditEducation
                handleChange={this.handleChange}
                schoolName={this.state.schoolName}
                studyTitle={this.state.studyTitle}
                studyDate={this.state.studyDate}
              />
              <EditExperience
                handleChange={this.handleChange}
                companyName={this.state.companyName}
                position={this.state.position}
                mainTasks={this.state.mainTasks}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
              />
            </div>
          ) : (
            <div>
              <DisplayGeneralInfo
                name={this.state.name}
                email={this.state.email}
                phoneNumber={this.state.phoneNumber}
              />
              <DisplayEducation
                schoolName={this.state.schoolName}
                studyTitle={this.state.studyTitle}
                studyDate={this.state.studyDate}
              />
              <DisplayExperience
                companyName={this.state.companyName}
                position={this.state.position}
                mainTasks={this.state.mainTasks}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
              />
            </div>
          )}
          {this.state.inEditMode ? (
            <button onClick={this.onClickSubmit}>Submit</button>
          ) : (
            <button onClick={this.onClickEdit}>Edit</button>
          )}
        </form>
      </div>
    );
  }
}

export default App;
