import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    schoolDegree: '',
    schoolStartDate: '',
    schoolEndate: '',
    employmentHistory: [],
    displayState: 'application'
  };

  handleFirstNameInput = event => {
    this.setState({ firstName: event.target.value });
  };
  handleLastNameInput = event => {
    this.setState({ lastName: event.target.value });
  };
  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };
  handlePhoneNumberInput = event => {
    this.setState({ phoneNumber: event.target.value });
  };
  handleSchoolNameInput = event => {
    this.setState({ schoolName: event.target.value });
  };
  handleSchoolDegreeInput = event => {
    this.setState({ schoolDegree: event.target.value });
  };
  handleSchoolStartDateInput = event => {
    this.setState({ schoolStartDate: event.target.value });
  };
  handleSchoolEndDateInput = event => {
    this.setState({ schoolEndDate: event.target.value });
  };
  handleEmploymentHistoryInput = event => {
    this.setState({ employmentHistory: this.state.employmentHistory.concat(event.target.value) });
  };

  displayPreview = e => {
    e.preventDefault();
    this.setState({ displayState: 'preview' });
  }

  displayEdit = e => {
    e.preventDefault();
    this.setState({ displayState: 'edit' });
    console.log(this.state.firstName)
  }

  render() {

    if (this.state.displayState == 'application') {
      return (
        <div>
          <p>application mode...</p>
          <form onSubmit={this.displayPreview}>
            <input onChange={this.handleFirstNameInput} placeholder="First Name:" />
            <input onChange={this.handleLastNameInput} placeholder="Last Name:" />
            <input onChange={this.handleEmailInput} placeholder="Emai:" />
            <input onChange={this.handlePhoneNumberInput} placeholder="Phone Number:" />
            <input onChange={this.handleSchoolNameInput} placeholder="School Name:" />
            <input onChange={this.handleSchoolDegreeInput} placeholder="School Degree:" />
            <input onChange={this.handleSchoolStartDateInput} placeholder="School Start Date:" />
            <input onChange={this.handleSchoolEndDateInput} placeholder="School End Date:" />
            <input onChange={this.handleEmploymentHistoryInput} placeholder="Employment History:" />

            <button type="submit">Submit</button>
          </form>
          {/* <Overview /> */}
        </div>
      );
    } else if (this.state.displayState == 'preview') {
      return (
        <div>
          <h2>preview mode...</h2>
          <p>First Name: {this.state.firstName}</p> 
          <p>Last Name: {this.state.lastName}</p> 
          <p>Email: {this.state.email}</p> 
          <p>Phone Number: {this.state.phoneNumber}</p> 
          <p>School Name: {this.state.schoolName}</p> 
          <p>School Degree: {this.state.schoolDegree}</p> 
          <p>School Start Date: {this.state.schoolStartDate}</p> 
          <p>School End Date: {this.state.schoolEndate}</p> 
          <p>Employment History: {this.state.employmentHistory}</p> 

          <button onClick={this.displayEdit}>Edit</button>
          {/* <form onSubmit={this.onClickBtn}>
            <input onChange={this.handleFirstNameInput} value={this.state.firstName} />
            <input onChange={this.handleLastNameInput} value={this.state.lastName} />
            <input onChange={this.handleEmailInput} value={this.state.email} />
            <input onChange={this.handlePhoneNumberInput} value={this.state.phoneNumber} />
            <input onChange={this.handleSchoolNameInput} value={this.state.schoolName} />
            <input onChange={this.handleSchoolDegreeInput} value={this.state.schoolDegree} />
            <input onChange={this.handleSchoolStartDateInput} value={this.state.schoolStartDate} />
            <input onChange={this.handleSchoolEndDateInput} value={this.state.schoolEndDate} />
            <input onChange={this.handleEmploymentHistoryInput} value={this.state.employmentHistory} />

          </form> */}
        </div>
      )
    } else if (this.state.displayState == 'edit') {
      return (
        <div>
          <p>edit mode...</p>
          <form onSubmit={this.displayPreview}>
            <input onChange={this.handleFirstNameInput} value={this.state.firstName} />
            <input onChange={this.handleLastNameInput} value={this.state.lastName} />
            <input onChange={this.handleEmailInput} value={this.state.email} />
            <input onChange={this.handlePhoneNumberInput} value={this.state.phoneNumber} />
            <input onChange={this.handleSchoolNameInput} value={this.state.schoolName} />
            <input onChange={this.handleSchoolDegreeInput} value={this.state.schoolDegree} />
            <input onChange={this.handleSchoolStartDateInput} value={this.state.schoolStartDate} />
            <input onChange={this.handleSchoolEndDateInput} value={this.state.schoolEndDate} />
            <input onChange={this.handleEmploymentHistoryInput} value={this.state.employmentHistory} />

            <button type="submit">Submit</button>
          </form>
        </div>
      )
    }

  }
}

export default App;
