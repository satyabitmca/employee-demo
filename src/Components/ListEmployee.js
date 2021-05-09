import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import EmployeeService from "./Services";

var divStyle = {
  margin: "3% 3%",
};

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = { employees: [], department: [] };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount = () => {
    this.getEmployeeList();
    this.getDepartmentList();
  };

  // To get all the employees
  getEmployeeList() {
    this.employeeService
      .getEmployeeList()
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDepartmentList() {
    this.employeeService
      .getDepartmentList()
      .then((response) => {
        console.log(response);
        this.setState({
          department: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteDepartment = (id) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      this.employeeService
        .deleteDepartment(id)
        .then(() => {
          this.getDepartmentList();
          console.log("Department Deleted !!!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  deleteEmployee = (empid) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      this.employeeService
        .deleteEmployee(empid)
        .then(() => {
          this.getEmployeeList();
          console.log("Employee Deleted !!!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { employees, department } = this.state;

    return (
      <div style={divStyle}>
        <div>
          <h3>Employee Details</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Employe Id</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee, i) => {
                  return (
                    <tr key={i}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.deptName}</td>
                      <td>
                        <Link
                          to={"editemployee/" + employee.id}
                          className="btn btn-primary"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Button
                          onClick={() => this.deleteEmployee(employee.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <div>
          <h3>Department Details</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Dept Id</th>
                <th>Dept Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {department &&
                department.map((dept, i) => {
                  return (
                    <tr key={i}>
                      <td>{dept.deptId}</td>
                      <td>{dept.deptName}</td>
                      <td>
                        <Link
                          to={`editdepartment/${dept.deptId}`}
                          className="btn btn-primary"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Button
                          onClick={() => this.deleteDepartment(dept.deptId)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ListEmployee;
