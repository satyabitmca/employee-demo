import React, { Component } from "react";
import EmployeeService from "./Services";
import "../index.css";

// const customStyle = {
//   width: "300px",
//   margin: "0 auto",
// };

class EditDepartment extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = {
      deptId: 0,
      deptname: "",
    };
  }

  componentDidMount = () => {
    this.getDepartmentById();
  };

  // To get employee based on ID
  getDepartmentById() {
    this.employeeService
      .getDepartmentById(this.props.match.params.deptid)
      .then((response) => {
        this.setState({
          id: response.data.deptId,
          deptname: response.data.deptName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { id, deptname } = this.state;
    this.employeeService
      .postDepartmentOnEditSumit(this.props.match.params.deptid, id, deptname)
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

export default EditDepartment;
