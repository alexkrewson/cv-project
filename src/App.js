// import React, { Component } from 'react';
// import Overview from './components/Overview';

import React, { useState, useEffect } from "react";


// class App extends Component {
const App = () => {


  const [displayState, setdisplayState] = useState("application");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [schoolDegree, setschoolDegree] = useState("");
  const [schoolStartDate, setschoolStartDate] = useState("");
  const [schoolEndDate, setschoolEndDate] = useState("");
  const [employmentHistory, setemploymentHistory] = useState("");

  const displayPreview = e => {
    e.preventDefault();
    setdisplayState("preview")
  }

  const displayEdit = e => {
    e.preventDefault();
    setdisplayState("edit")

  }

  if (displayState == 'application') {
    return (
      <div>
        <p>application mode...</p>
        <form onSubmit={displayPreview}>
          <input onChange={(event) => setfirstName(event.target.value)} placeholder="First Name:" />
          <input onChange={(event) => setlastName(event.target.value)} placeholder="Last Name:" />
          <input onChange={(event) => setemail(event.target.value)} placeholder="Email:" />
          <input onChange={(event) => setphoneNumber(event.target.value)} placeholder="Phone Number:" />
          <input onChange={(event) => setschoolName(event.target.value)} placeholder="School Name:" />
          <input onChange={(event) => setschoolDegree(event.target.value)} placeholder="School Degree:" />
          <input onChange={(event) => setschoolStartDate(event.target.value)} placeholder="School Start Date:" />
          <input onChange={(event) => setschoolEndDate(event.target.value)} placeholder="School End Date:" />
          <input onChange={(event) => setemploymentHistory(event.target.value)} placeholder="Emplotment History:" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else if (displayState == 'preview') {
    return (
      <div>
        <h2>preview mode...</h2>
        <p>First Name: {firstName}</p>

        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>School Name: {schoolName}</p>
        <p>School Degree: {schoolDegree}</p>
        <p>School Start Date: {schoolStartDate}</p>
        <p>School End Date: {schoolEndDate}</p>
        <p>Employment History: {employmentHistory}</p>

        <button onClick={displayEdit}>Edit</button>
      </div>
    )

  } else if (displayState == 'edit') {
    return (
      <div>
        <p>edit mode...</p>
        <form onSubmit={displayPreview}>
          <input onChange={(event) => setfirstName(event.target.value)} value={firstName}  />
          <input onChange={(event) => setlastName(event.target.value)} value={lastName}  />
          <input onChange={(event) => setemail(event.target.value)} value={email}  />
          <input onChange={(event) => setphoneNumber(event.target.value)} value={phoneNumber}  />
          <input onChange={(event) => setschoolName(event.target.value)} value={schoolName}  />
          <input onChange={(event) => setschoolDegree(event.target.value)} value={schoolDegree}  />
          <input onChange={(event) => setschoolStartDate(event.target.value)} value={schoolStartDate}  />
          <input onChange={(event) => setschoolEndDate(event.target.value)} value={schoolEndDate}  />
          <input onChange={(event) => setemploymentHistory(event.target.value)} value={employmentHistory}  />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }


  // return (
  //   <div>
  //     <p>application mode...</p>
  //     <form onSubmit={displayPreview}>
  //       <input onChange={handleFirstNameInput} placeholder="First Name:" />
  //       {/* <input onChange={this.handleLastNameInput} placeholder="Last Name:" />
  //           <input onChange={this.handleEmailInput} placeholder="Emai:" />
  //           <input onChange={this.handlePhoneNumberInput} placeholder="Phone Number:" />
  //           <input onChange={this.handleSchoolNameInput} placeholder="School Name:" />
  //           <input onChange={this.handleSchoolDegreeInput} placeholder="School Degree:" />
  //           <input onChange={this.handleSchoolStartDateInput} placeholder="School Start Date:" />
  //           <input onChange={this.handleSchoolEndDateInput} placeholder="School End Date:" />
  //           <input onChange={this.handleEmploymentHistoryInput} placeholder="Employment History:" /> */}

  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );



































  // if (displayState == 'application') {
  //   return (
  //     <div>
  //       <p>application mode...</p>
  //       <form onSubmit={this.displayPreview}>
  //         <input onChange={handleFirstNameInput} placeholder="First Name:" />
  //         {/* <input onChange={this.handleLastNameInput} placeholder="Last Name:" />
  //           <input onChange={this.handleEmailInput} placeholder="Emai:" />
  //           <input onChange={this.handlePhoneNumberInput} placeholder="Phone Number:" />
  //           <input onChange={this.handleSchoolNameInput} placeholder="School Name:" />
  //           <input onChange={this.handleSchoolDegreeInput} placeholder="School Degree:" />
  //           <input onChange={this.handleSchoolStartDateInput} placeholder="School Start Date:" />
  //           <input onChange={this.handleSchoolEndDateInput} placeholder="School End Date:" />
  //           <input onChange={this.handleEmploymentHistoryInput} placeholder="Employment History:" /> */}

  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   );
  // } else if (this.state.displayState == 'preview') {
  //   return (
  //     <div>
  //       <h2>preview mode...</h2>
  //       <p>First Name: {this.state.firstName}</p>
  //       {/* <p>Last Name: {this.state.lastName}</p>
  //         <p>Email: {this.state.email}</p>
  //         <p>Phone Number: {this.state.phoneNumber}</p>
  //         <p>School Name: {this.state.schoolName}</p>
  //         <p>School Degree: {this.state.schoolDegree}</p>
  //         <p>School Start Date: {this.state.schoolStartDate}</p>
  //         <p>School End Date: {this.state.schoolEndate}</p>
  //         <p>Employment History: {this.state.employmentHistory}</p> */}

  //       <button onClick={this.displayEdit}>Edit</button>
  //       {/* <form onSubmit={this.onClickBtn}>
  //           <input onChange={this.handleFirstNameInput} value={this.state.firstName} />
  //           <input onChange={this.handleLastNameInput} value={this.state.lastName} />
  //           <input onChange={this.handleEmailInput} value={this.state.email} />
  //           <input onChange={this.handlePhoneNumberInput} value={this.state.phoneNumber} />
  //           <input onChange={this.handleSchoolNameInput} value={this.state.schoolName} />
  //           <input onChange={this.handleSchoolDegreeInput} value={this.state.schoolDegree} />
  //           <input onChange={this.handleSchoolStartDateInput} value={this.state.schoolStartDate} />
  //           <input onChange={this.handleSchoolEndDateInput} value={this.state.schoolEndDate} />
  //           <input onChange={this.handleEmploymentHistoryInput} value={this.state.employmentHistory} />

  //         </form> */}
  //     </div>
  //   )
  // } else if (this.state.displayState == 'edit') {
  //   return (
  //     <div>
  //       <p>edit mode...</p>
  //       <form onSubmit={this.displayPreview}>
  //         <input onChange={this.handleFirstNameInput} value={this.state.firstName} />
  //         {/* <input onChange={this.handleLastNameInput} value={this.state.lastName} />
  //           <input onChange={this.handleEmailInput} value={this.state.email} />
  //           <input onChange={this.handlePhoneNumberInput} value={this.state.phoneNumber} />
  //           <input onChange={this.handleSchoolNameInput} value={this.state.schoolName} />
  //           <input onChange={this.handleSchoolDegreeInput} value={this.state.schoolDegree} />
  //           <input onChange={this.handleSchoolStartDateInput} value={this.state.schoolStartDate} />
  //           <input onChange={this.handleSchoolEndDateInput} value={this.state.schoolEndDate} />
  //           <input onChange={this.handleEmploymentHistoryInput} value={this.state.employmentHistory} /> */}

  //         <button type="submit">Submit</button>
  //       </form>
  //     </div>
  //   )
  // }

  // }
}

export default App;
