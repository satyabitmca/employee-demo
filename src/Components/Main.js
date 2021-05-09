import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListEmployee from "../Components/ListEmployee";
import AddEmployee from "../Components/AddEmployee";
import AddDepartment from "../Components/AddDepartment";
import EditEmployee from "../Components/EditEmployee";
import EditDepartment from "../Components/EditDepartment";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ListEmployee} />
          <Route path="/list" component={ListEmployee} />
          <Route path="/addemployee" component={AddEmployee} />
          <Route path="/adddepartment" component={AddDepartment} />
          <Route path="/editemployee/:id" component={EditEmployee} />
          <Route path="/editdepartment/:deptid" component={EditDepartment} />
        </Switch>
      </main>
    );
  }
}

export default Main;
