import React, { Component } from "react";
import EmployeeService from "./Services";
import "../index.css";

// const customStyle = {
//   width: "300px",
//   margin: "0 auto",
// };

class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = {
      deptname: "",
    };
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    const { deptname } = this.state;

    this.employeeService
      .postDepartmentOnAddButton(deptname)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form id="formid" className="formid" onSubmit={this.handleSubmit}>
          <label>
            Dept Name
            <input
              required
              name="deptname"
              type="text"
              value={this.state.deptname}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default AddDepartment;
