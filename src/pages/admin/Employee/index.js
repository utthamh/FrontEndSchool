import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Attendence from './Attendence';
import EmployeeImport from './EmployeeImport';
import EmployeeList from './EmployeeList';
import IdCard from './IdCard';
import Leave from './Leave';
import Payroll from './Payroll';
import Post from './Post';




export default function index() {
    const baseroute='/admin/employee/';
    return (
        <Switch>
            <Route path={baseroute+'attendence'} component={Attendence}/>
            <Route path={baseroute+'employeeimport'} component={EmployeeImport}/>
            <Route path={baseroute+'employeelist'} component={EmployeeList}/>
            <Route path={baseroute+'idcard'} component={IdCard}/>
            <Route path={baseroute+'leave'} component={Leave}/>
            <Route path={baseroute+'payroll'} component={Payroll}/>
            <Route path={baseroute+'post'} component={Post}/>
           
          
        </Switch>
    )
}
