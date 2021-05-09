import React, { Component } from "react";
import Select from "react-select";
import EmployeeService from "./Services";
import "../index.css";

// const customStyle = {
//   width: "300px",
//   margin: "0 auto",
// };

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = {
      name: "",
      dept: 0,
      selectedDeptId: null,
      department: [],
    };
  }

  getDepartmentList = () => {
    this.employeeService
      .getDepartmentList()
      .then((response) => {
        console.log(response.data);
        this.setState({
          department: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getDepartmentList();
  };

  handleDropdownChange = (selectedOption) => {
    this.setState({ selectedOption, dept: selectedOption.value });
    console.log(`Option selected:`, selectedOption.value, selectedOption.label);
  };
  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, dept } = this.state;

    this.employeeService
      .postEmployeeOnAddButton(name, dept)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { selectedOption } = this.state;

    const options = this.state.department.map((dept) => {
      return { value: dept.deptId, label: dept.deptName };
    });

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
            <div style={{ width: "200px" }}>
              <Select
                required
                value={selectedOption}
                onChange={this.handleDropdownChange}
                options={options}
              />
            </div>
            {/* <input
              name="dept"
              type="text"
              value={this.state.dept}
              onChange={this.handleChange}
              className="form-control"
            /> */}
          </label>
          <br />
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
