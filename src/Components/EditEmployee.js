import React, { Component } from "react";
import EmployeeService from "./Services";
import "../index.css";

// const customStyle = {
//   width: "300px",
//   margin: "0 auto",
// };

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = {
      id: "",
      name: "",
      dept: "",
    };
  }

  componentDidMount = () => {
    this.getEmployeeById();
  };

  // To get employee based on ID
  getEmployeeById() {
    this.employeeService
      .getEmployeeById(this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          dept: response.data.dept,
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
    const { id, name, dept } = this.state;

    this.employeeService
      .postEmployeeOnEditSubmit(this.props.match.params.id, id, name, dept)
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
            Name
            <input
              required
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Dept
            <input
              readOnly
              name="dept"
              type="text"
              value={this.state.dept}
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

export default EditEmployee;
