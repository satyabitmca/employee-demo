import axios from "axios";
import { API_URL } from "../Config";

class EmployeeService {
  getDepartmentList = () => {
    return axios.get(`${API_URL}department/getalldepartment`);
  };

  getEmployeeById = (id) => {
    return axios.get(`${API_URL}Employee/Get/${id}`);
  };

  getDepartmentById = (id) => {
    return axios.get(`${API_URL}Department/Get/${id}`);
  };

  getEmployeeList = () => {
    return axios.get(`${API_URL}employee/getallemployees`);
  };
  getDepartmentList = () => {
    return axios.get(`${API_URL}department/getalldepartment`);
  };

  postEmployeeOnEditSubmit = (urlId, id, name, dept) => {
    return axios.patch(`${API_URL}Employee/Edit/${urlId}`, {
      id: id,
      name: name,
      dept: Number(dept),
    });
  };

  postDepartmentOnEditSumit = (urlId, id, deptname) => {
    return axios.patch(`${API_URL}Department/Edit/${urlId}`, {
      deptid: Number(id),
      deptname: deptname,
    });
  };

  postEmployeeOnAddButton = (name, dept) => {
    return axios.post(`${API_URL}Employee/Add`, {
      name: name,
      dept: Number(dept),
    });
  };

  postDepartmentOnAddButton = (deptname) => {
    return axios.post(`${API_URL}Department/Add`, {
      deptname,
    });
  };

  deleteEmployee(id) {
    return axios.delete(`${API_URL}Employee/Delete/${id}`);
  }
  deleteDepartment = (id) => {
    return axios.delete(`${API_URL}Department/Delete/${id}`);
  };
}

export default EmployeeService;
